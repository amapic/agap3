import { useState, useRef, useEffect, useLayoutEffect } from "react";
// import fileee from '../Aee.vtkjs.zip?raw';
// opengl vs webgpu geometry profiles
import "@kitware/vtk.js/Rendering/Profiles/Geometry";

import vtkRenderWindowInteractor from "@kitware/vtk.js/Rendering/Core/RenderWindowInteractor";
import vtkOrientationMarkerWidget from "@kitware/vtk.js/Interaction/Widgets/OrientationMarkerWidget";
import vtkInteractiveOrientationWidget from "@kitware/vtk.js/Widgets/Widgets3D/InteractiveOrientationWidget";
import vtkAxesActor from "@kitware/vtk.js/Rendering/Core/AxesActor";
import vtkWidgetManager from "@kitware/vtk.js/Widgets/Core/WidgetManager";

import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";
import vtkMapper from "@kitware/vtk.js/Rendering/Core/Mapper";

import vtkOpenGLRenderWindow from "@kitware/vtk.js/Rendering/OpenGL/RenderWindow";
import vtkRenderWindow from "@kitware/vtk.js/Rendering/Core/RenderWindow";
import vtkRenderer from "@kitware/vtk.js/Rendering/Core/Renderer";

import vtkInteractorStyleTrackballCamera from "@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera";

// import vtkInteractorStyleImage from "@kitware/vtk.js/Interaction/Style/InteractorStyleImage";

// vtkjs file types
import vtkXMLPolyDataReader from "@kitware/vtk.js/IO/XML/XMLPolyDataReader";
import HttpSceneLoader from "@kitware/vtk.js/IO/Core/HttpSceneLoader";
import DataAccessHelper from "@kitware/vtk.js/IO/Core/DataAccessHelper";

// Give DataAccessHelper to access to various data source
import "@kitware/vtk.js/IO/Core/DataAccessHelper/HtmlDataAccessHelper";
import "@kitware/vtk.js/IO/Core/DataAccessHelper/JSZipDataAccessHelper";

import * as vtkMath from "@kitware/vtk.js/Common/Core/Math";

import store from "./../store";
import {increment} from  "./../reducer";

import { useDispatch } from "react-redux";
// adapted from https://kitware.github.io/vtk-js/examples/GeometryViewer.html
// ----------------------------------------------------------------------------
function majorAxis(vec3, idxA, idxB) {
  const axis = [0, 0, 0];
  const idx = Math.abs(vec3[idxA]) > Math.abs(vec3[idxB]) ? idxA : idxB;
  const value = vec3[idx] > 0 ? 1 : -1;
  axis[idx] = value;
  return axis;
}

const defaultColorBy = { value: ":", label: "Solid Color" };

const renderWindowSetup = (container) => {
  // Standard rendering code setup
  const renderWindow = vtkRenderWindow.newInstance();
  const renderer = vtkRenderer.newInstance({});
  renderer.setBackgroundFrom([0.0, 0.0, 0.0, 0.0]);

  renderWindow.addRenderer(renderer);

  // Use OpenGL as the backend to view the all this
  const openglRenderWindow = vtkOpenGLRenderWindow.newInstance();
  renderWindow.addView(openglRenderWindow);

  openglRenderWindow.setContainer(container);

  // Capture size of the container and set it to the renderWindow
  const { width, height } = container.getBoundingClientRect();
  openglRenderWindow.setSize(width, height);

  // Setup an interactor to handle mouse events
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

  const rendition = useRef(0);

  const dispatch = useDispatch()

  // const inputElement = useRef(null);

  const [fileType, setFileType] = useState({
    file: "Tuyau.vtkjs.zip",
    type: "vtkjs",
  });
  const [visible, setVisible] = useState("hidden");

  // rendition.current++;
  // console.log(rendition.current);

  // import

  useEffect(() => {
    fetch("Tuyau.vtkjs.zip", { mode: "no-cors" })
      .then((response) => response.blob())
      .then((a) => {
        // setTimeout(()=>{setShowFirstContent(false)},2);

        // setShowFirstContent(false)
        setFileType({
          file: a,
          type: "vtkjs",
        });
        // setModel(a)
      });
  }, []);

  // set up the renderer
  useEffect(() => {
    // addFile(model);

    if (!context.current) {
      const { renderer, renderWindow, interactor } = renderWindowSetup(
        vtkContainerRef.current
      );
      const camera = renderer.getActiveCamera();

      var gg = camera.setPosition(-100, -150, -10);

      // empty mapper / actor for holding eventual geometry
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
        const {
          renderer,
          renderWindow,
          mapper,
     
        } = context.current;

        renderer.delete();
        renderWindow.delete();
        mapper.delete();
  

        context.current = null;
      }
    };
  }, [vtkContainerRef]);

  // read the file
  useEffect(() => {
    if (!context.current) return;
    const { mapper, renderer, renderWindow } = context.current;
    const { file, type } = fileType;

    // const file="C:/Users/rotom/Documents/SFHFH.vtkjs.zip"
    //  const type="vtkjs"

    const camera = renderer.getActiveCamera();

    // console.log("pos",camera.getPosition());

    if (file && file.size > 0) {
      if (type === "vtkjs") {
        // alert(file);
        // console.log("ee",JSON.stringify(file))
        // console.log(file)
        const dataAccessHelper = DataAccessHelper.get("zip", {
          zipContent: file,
          callback: (zip) => {
            const sceneImporter = HttpSceneLoader.newInstance({
              renderer: renderer,
              dataAccessHelper,
            });

            sceneImporter.setUrl("index.json");

            sceneImporter.onReady(() => {
              dispatch(increment())
              // let scene = sceneImporter.getScene();
              // let metadata = sceneImporter.getMetadata();
              // console.log("cacaca");
              setVisible("visible");
              renderer.resetCamera();
              renderWindow.render();
            });
          },
        });

        // console.log(dataAccessHelper)
      }
    }

    //
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
