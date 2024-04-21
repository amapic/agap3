import React, { useState, useEffect, useRef } from 'react';
import '@kitware/vtk.js/favicon';
import '@kitware/vtk.js/Rendering/Profiles/Geometry';
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkPolyData from '@kitware/vtk.js/Common/DataModel/PolyData';
import vtkFullScreenRenderWindow from '@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow';
import vtkXMLPolyDataReader from '@kitware/vtk.js/IO/XML/XMLPolyDataReader';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkHttpDataAccessHelper from '@kitware/vtk.js/IO/Core/DataAccessHelper/HttpDataAccessHelper';
import { useFrame } from '@react-three/fiber'
const { fetchBinary } = vtkHttpDataAccessHelper;

const BASE_URL = 'https://kitware.github.io/vtk-js-datasets/data/vtp/can/';

export default  function VtkTimeSeriesViewer() {
  const [timeSeriesData, setTimeSeriesData] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentVal, setCurrentVal] = useState(0);
  const [camPos, setCamPos] = useState(null);
  const [viewUp, setViewUp] = useState(null);
  const fullScreenRendererRef = useRef(null);
  const rendererRef = useRef(null);
  const timesliderRef = useRef(null);
  const timevalueRef = useRef(null);
  const mapperRef = useRef(null);
  const actorRef = useRef(null);
  
  const context = useRef(null);
  
   // const renderWindowSetup = (container) => {
  // const renderWindow = vtkRenderWindow.newInstance();
  // const renderer = vtkRenderer.newInstance({});
  // renderer.setBackgroundFrom([0.0, 0.0, 0.0, 0.0]);

  // renderWindow.addRenderer(renderer);

  // const openglRenderWindow = vtkOpenGLRenderWindow.newInstance();
  // renderWindow.addView(openglRenderWindow);

  // openglRenderWindow.setContainer(container);

  // const { width, height } = container.getBoundingClientRect();
  // openglRenderWindow.setSize(width, height);

  // const interactor = vtkRenderWindowInteractor.newInstance();
  // interactor.setInteractorStyle(
    // vtkInteractorStyleTrackballCamera.newInstance()
  // );
  // interactor.setView(openglRenderWindow);
  // interactor.initialize();
  // interactor.bindEvents(container);

  // return { renderer, renderWindow, interactor };
// };
  
 function getDataTimeStep(vtkObj) {
  const arr = vtkObj.getFieldData().getArrayByName('TimeValue');
  if (arr) {
    return arr.getData()[0];
  }
  return null;
}
  // useEffect(() => {
	  // if (camPos && viewUp){
// rendererRef.current?.getActiveCamera().setPosition(camPos[0], camPos[1], camPos[2]);
// rendererRef.current?.getActiveCamera().setViewUp(viewUp[0], viewUp[1], viewUp[2]);
	  // }

  // },[camPos])
  


function downloadTimeSeries() {
  const files = [
    'can_0.vtp',
    'can_5.vtp',
    'can_10.vtp',
    'can_15.vtp',
    'can_20.vtp',
    'can_25.vtp',
    'can_30.vtp',
    'can_35.vtp',
    'can_40.vtp',
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

function setVisibleDataset(ds) {
  mapperRef.current.setInputData(ds);
  // rendererRef.current.resetCamera();
  // renderWindow.render();
  // rendererRef.current.render();
  fullScreenRendererRef.current.getRenderWindow().render();
  dispatch(increment());
}

  useEffect(() => {
    const initializeRenderer = async () => {
      const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
        background: [0, 0, 0],
      });
      const renderer = fullScreenRenderer.getRenderer();

      const mapper = vtkMapper.newInstance();
      mapper.setInputData(vtkPolyData.newInstance());

      const actor = vtkActor.newInstance();
      actor.setMapper(mapper);

      renderer.addActor(actor);
      // renderer.resetCamera();
      fullScreenRenderer.getRenderWindow().render();
	  
	  fullScreenRendererRef.current=fullScreenRenderer;

      rendererRef.current = renderer;
      mapperRef.current = mapper;
      actorRef.current = actor;

      // Download data and update state
      const downloadedData = await downloadTimeSeries();
      setTimeSeriesData(downloadedData.filter((ds) => getDataTimeStep(ds) !== null));
    };
	// alert("sfgs")
    initializeRenderer();
	
	rendererRef.current?.getActiveCamera().setPosition(0, 55, -22);
    rendererRef.current?.getActiveCamera().setViewUp(0, 0, -1);

    return () => {
      // Clean up resources when component unmounts
      // fullScreenRendererRef.current?.delete();
    };
  }, []);

  useEffect(() => {
    if (!timeSeriesData.length) return;

    const updateSliderAndData = () => {
      const slider = timesliderRef.current;
      if (slider) {
        slider.min = 0;
        slider.max = timeSeriesData.length - 1;
        slider.step = 1;
        slider.value = currentStep;
      }

      const activeDataset = timeSeriesData[currentStep];
      if (activeDataset) {
        setVisibleDataset(activeDataset);
        timevalueRef.current.innerText = getDataTimeStep(activeDataset);
      }
    };

    updateSliderAndData();
	

    // Set up camera (optional, adjust as needed)
    // rendererRef.current?.getActiveCamera().setPosition(0, 55, -22);
    // rendererRef.current?.getActiveCamera().setViewUp(0, 0, -1);
  }, [timeSeriesData, currentStep]);
  
  // useEffect(() => {
    // if (!context.current) {
      // const { renderer, renderWindow, interactor } = renderWindowSetup(
        // vtkContainerRef.current
      // );
   

      // const mapper = vtkMapper.newInstance({
        // interpolateScalarsBeforeMapping: false,
        // useLookupTableScalarRange: true,
        // scalarVisibility: false,
      // });

      // context.current = {
        // renderWindow,
        // renderer,
        // mapper,
      // };
    // }

    // return () => {
      // if (context.current) {
        // const { renderer, renderWindow, mapper } = context.current;

        // renderer.delete();
        // renderWindow.delete();
        // mapper.delete();

        // context.current = null;
      // }
    // };
  // }, [vtkContainerRef]);

  const handleSliderChange = (event) => {
    setCurrentStep(Number(event.target.value));
	// alert(Number(event.target.value))
	// fullScreenRendererRef.current.getRenderWindow().render();
	// rendererRef.current.render();
	// rendererRef.current.resetCamera();
  };
  // useEffect(() => {
	  
	  // const kk=setTimeout(()=>{
		  // let aa=Math.random(1,8);
		  // setCurrentStep(aa);
		  // fullScreenRendererRef.current.getRenderWindow().render();
	  // },2000)
	  
	  // return () => {
        // clearInterval(kk);
	  // }
	  
	  
  // },[])
  
  useEffect(() => {
    const interval1 = setInterval(() => {
		setCurrentStep((currentStep) => currentStep + 1);
		// setCamPos(rendererRef.current?.getActiveCamera().getPosition());
		// setCamPos(rendererRef.current?.getActiveCamera().getViewUp());
		// fullScreenRendererRef.current.getRenderWindow().render();
		// console.log(rendererRef.current?.getActiveCamera().getPosition())
		// console.log(rendererRef.current?.getActiveCamera().getViewUp())

    }, 1000);

    // const interval2 = setInterval(() => {
      // let s = 0;
      // setCurrentStep((currentStep) => {s = currentStep; return currentStep;}); // HERE
      // console.log("interval2: currentStep elapsed", s);
	
    // }, 1000);

    // const interval3 = setInterval(function () {
      // let s = 0;
      // setCurrentStep((currentStep) => {s = currentStep; return currentStep;}); // HERE
      // console.log("interval3: currentStep elapsed", s);
	 
    // }, 1000);

    return () => {
      clearInterval(interval1);
      // clearInterval(interval2);
      // clearInterval(interval3);
    };
  }, []);
  
  // useFrame(() => {
	  
	  
    // const interval1 = setInterval(() => {
      // setCurrentVal((currentVal) => currentVal + 0.0001);
	  // alert(rendererRef.current?.getActiveCamera().getPosition())
	 
    // }, 100);



    // return () => {
      // clearInterval(interval1);
    // };
  // }, []);

  return (
    <div>
      <div ref={fullScreenRendererRef} style={{ width: '100%', height: '400px',zIndex:9 }} />
      <div id="fform"
	  style={{
		backgroundColor:"white"  ,
		zIndex:10,
		position:"fixed"
	  }}
	  >
        <input type="range" ref={timesliderRef} onChange={handleSliderChange} />
        <span ref={timevalueRef}></span><br />
        {/* <span id="ttt">{currentVal}</span> */}
      </div>
    </div>
  );
}


