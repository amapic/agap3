import { useState, useRef, useEffect } from "react";

import "@kitware/vtk.js/Rendering/Profiles/Geometry";

import vtkRenderWindowInteractor from "@kitware/vtk.js/Rendering/Core/RenderWindowInteractor";
// import vtkWidgetManager from "@kitware/vtk.js/Widgets/Core/WidgetManager";

// import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";
import vtkMapper from "@kitware/vtk.js/Rendering/Core/Mapper";

import vtkOpenGLRenderWindow from "@kitware/vtk.js/Rendering/OpenGL/RenderWindow";
import vtkRenderWindow from "@kitware/vtk.js/Rendering/Core/RenderWindow";
import vtkRenderer from "@kitware/vtk.js/Rendering/Core/Renderer";

import vtkInteractorStyleTrackballCamera from "@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera";

// import vtkXMLPolyDataReader from "@kitware/vtk.js/IO/XML/XMLPolyDataReader";
import HttpSceneLoader from "@kitware/vtk.js/IO/Core/HttpSceneLoader";
import DataAccessHelper from "@kitware/vtk.js/IO/Core/DataAccessHelper";

import "@kitware/vtk.js/IO/Core/DataAccessHelper/HtmlDataAccessHelper";
import "@kitware/vtk.js/IO/Core/DataAccessHelper/JSZipDataAccessHelper";

import vtkXMLPolyDataReader from "@kitware/vtk.js/IO/XML/XMLPolyDataReader";
// import * as vtkMath from "@kitware/vtk.js/Common/Core/Math";

import vtkHttpDataAccessHelper from "@kitware/vtk.js/IO/Core/DataAccessHelper/HttpDataAccessHelper";

import { increment } from "./../reducer";

import { useDispatch } from "react-redux";

const { fetchBinary } = vtkHttpDataAccessHelper;

const BASE_URL = "https://kitware.github.io/vtk-js-datasets/data/vtp/can/";
function downloadTimeSeries() {
  const files = [
    "can_0.vtp",
    "can_5.vtp",
    "can_10.vtp",
    "can_15.vtp",
    "can_20.vtp",
    "can_25.vtp",
    "can_30.vtp",
    "can_35.vtp",
    "can_40.vtp",
  ];
  return Promise.all(
    files.map((filename) =>
      fetchBinary(`${BASE_URL}/${filename}`).then((binary) => {
        const reader = vtkXMLPolyDataReader.newInstance();
        reader.parseAsArrayBuffer(binary);
        return reader.getOutputData(0);
      })
    )
  );
}

const renderWindowSetup = (container) => {
  const renderWindow = vtkRenderWindow.newInstance();
  const renderer = vtkRenderer.newInstance({});
  renderer.setBackgroundFrom([0.0, 0.0, 0.0, 0.0]);

  renderWindow.addRenderer(renderer);

  const openglRenderWindow = vtkOpenGLRenderWindow.newInstance();
  renderWindow.addView(openglRenderWindow);

  openglRenderWindow.setContainer(container);

  const { width, height } = container.getBoundingClientRect();
  openglRenderWindow.setSize(width, height);

  const interactor = vtkRenderWindowInteractor.newInstance();
  interactor.setInteractorStyle(
    vtkInteractorStyleTrackballCamera.newInstance()
  );
  interactor.setView(openglRenderWindow);
  interactor.initialize();
  interactor.bindEvents(container);

  return { renderer, renderWindow, interactor };
};

function getDataTimeStep(vtkObj) {
  const arr = vtkObj.getFieldData().getArrayByName("TimeValue");
  if (arr) {
    return arr.getData()[0];
  }
  return null;
}

const VTPViewer = () => {
  const vtkContainerRef = useRef(null);
  const context = useRef(null);

  const timeSeriesData = useRef([]);

  useEffect(() => {
    if (!context.current) {
      const { renderer, renderWindow, interactor } = renderWindowSetup(
        vtkContainerRef.current
      );
      // const camera = renderer.getActiveCamera();

      const mapper = vtkMapper.newInstance({
        interpolateScalarsBeforeMapping: false,
        useLookupTableScalarRange: true,
        scalarVisibility: false,
      });

      context.current = {
        renderWindow,
        renderer,
        mapper,
      };
    }

    return () => {
      if (context.current) {
        const { renderer, renderWindow, mapper } = context.current;

        renderer.delete();
        renderWindow.delete();
        mapper.delete();

        context.current = null;
      }
    };
  }, [vtkContainerRef]);

  useEffect(() => {
    if (!context.current) return;
    const { mapper, renderer, renderWindow } = context.current;

    // const { file, type } = fileType;

    downloadTimeSeries().then((downloadedData) => {
      timeSeriesData.current = downloadedData.filter(
        (ds) => getDataTimeStep(ds) !== null
      );
      // timeSeriesData.current.currentsort((a, b) => getDataTimeStep(a) - getDataTimeStep(b));

      // uiUpdateSlider(timeSeriesData.currentlength);
      // timeslider.value = 0;

      // set up camera
      renderer.getActiveCamera().setPosition(0, 55, -22);
      renderer.getActiveCamera().setViewUp(0, 0, -1);

      // setVisibleDataset(timeSeriesData.current[0]);
      mapper.setInputData(timeSeriesData.current[3]);
      renderer.resetCamera();
      renderWindow.render();
      // timevalue.innerText = getDataTimeStep(timeSeriesData.current[0]);
    });

    // console.log(gg)
  }, []);

  return (
    <>
      <div
        ref={vtkContainerRef}
        style={{
          cursor: "move",
          height: "100vh",
          width: "100%",
          background: "rgba(65,73,77,1)",
        }}
      />
    </>
  );
};

export default function App() {
  return (
    <div id="vtk">
      <VTPViewer />
    </div>
  );
}
