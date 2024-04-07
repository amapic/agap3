import { useState, useRef, useEffect } from "react";

import "@kitware/vtk.js/Rendering/Profiles/Geometry";

import vtkRenderWindowInteractor from "@kitware/vtk.js/Rendering/Core/RenderWindowInteractor";
// import vtkWidgetManager from "@kitware/vtk.js/Widgets/Core/WidgetManager";

import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";
import vtkMapper from "@kitware/vtk.js/Rendering/Core/Mapper";

import vtkOpenGLRenderWindow from "@kitware/vtk.js/Rendering/OpenGL/RenderWindow";
import vtkRenderWindow from "@kitware/vtk.js/Rendering/Core/RenderWindow";
import vtkRenderer from "@kitware/vtk.js/Rendering/Core/Renderer";

import vtkInteractorStyleTrackballCamera from "@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera";

import vtkXMLPolyDataReader from "@kitware/vtk.js/IO/XML/XMLPolyDataReader";
import HttpSceneLoader from "@kitware/vtk.js/IO/Core/HttpSceneLoader";
import DataAccessHelper from "@kitware/vtk.js/IO/Core/DataAccessHelper";

import "@kitware/vtk.js/IO/Core/DataAccessHelper/HtmlDataAccessHelper";
import "@kitware/vtk.js/IO/Core/DataAccessHelper/JSZipDataAccessHelper";

// import * as vtkMath from "@kitware/vtk.js/Common/Core/Math";

import { increment } from "./../reducer";

import { useDispatch } from "react-redux";

function majorAxis(vec3, idxA, idxB) {
  const axis = [0, 0, 0];
  const idx = Math.abs(vec3[idxA]) > Math.abs(vec3[idxB]) ? idxA : idxB;
  const value = vec3[idx] > 0 ? 1 : -1;
  axis[idx] = value;
  return axis;
}

// const defaultColorBy = { value: ":", label: "Solid Color" };

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

const VTPViewer = () => {
  const vtkContainerRef = useRef(null);
  const context = useRef(null);


  const dispatch = useDispatch();

  const [fileType, setFileType] = useState({
    file: null,
    type: "vtkjs",
  });
  const [visible, setVisible] = useState("hidden");

  useEffect(() => {
    fetch("Rotor.vtkjs.zip", { mode: "no-cors" })
      .then((response) => response.blob())
      .then((answer) => {
        setFileType({
          file: answer,
          type: "vtkjs",
        });
      });
  }, []);

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
    const { file, type } = fileType;

    // const camera = renderer.getActiveCamera();

    if (file && file.size > 0) {
      if (type === "vtkjs") {
        const dataAccessHelper = DataAccessHelper.get("zip", {
          zipContent: file,
          callback: (zip) => {
            const sceneImporter = HttpSceneLoader.newInstance({
              renderer: renderer,
              dataAccessHelper,
            });

            sceneImporter.setUrl("index.json");

            sceneImporter.onReady(() => {
              dispatch(increment());

              setVisible("visible");
              renderer.resetCamera();
              renderWindow.render();
            });
          },
        });
      }
    }
  }, [fileType]);

  return (
    <>
      <div
        id="tttt"
        ref={vtkContainerRef}
        style={{
          height: "100vh",
          width: "100%",
          background: "rgba(65,73,77,1)",
          visibility: { visible },
        }}
      />
    </>
  );
};

export default function App() {
  return (
    <div className="App2">
      <VTPViewer />
    </div>
  );
}
