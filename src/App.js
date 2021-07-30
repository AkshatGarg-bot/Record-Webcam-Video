import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';
import {useState}  from 'react';
import {useEffect} from 'react';
import { useRecordWebcam } from 'react-record-webcam';


function App(props) {
  const recordWebcam = useRecordWebcam();

  // const saveFile = async () => {
  //   const blob = await recordWebcam.getRecording();}
  return (
    <div className="App">
      {/* <h1>afsdsf {socketid}
        
      </h1> */}
      {/* <video autoPlay ></video> */}
      <p>Camera status: {recordWebcam.status}</p>
      <button onClick={recordWebcam.open}>Open camera</button>
      <button onClick={recordWebcam.start}>Start recording</button>
      <button onClick={recordWebcam.stop}>Stop recording</button>
      <button onClick={recordWebcam.retake}>Retake recording</button>
      <button onClick={recordWebcam.download}>Download recording</button>
      {/* <button onClick={saveFile}>Save file to server</button> */}
      <video ref={recordWebcam.webcamRef} autoPlay muted />
      <video ref={recordWebcam.previewRef} autoPlay muted loop />
    </div>
    
  );
}

export default App;
