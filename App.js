import './App.css';
import { useState } from 'react';

function App() {

   const [playing, setPlaying] = useState(false);

   const HEIGHT = 500;
   const WIDTH = 500;

   const startVideo = () =>{
      setPlaying(true)
      navigator.getUserMedia(
        {
          video: true,
        },
        (stream) => {
          let video = document.getElementsByClassName('app_videoFeed')[0];
          if(video){
            video.srcObject = stream;
          }
        },
         (err)=> console.error(err)
      );
   };

   const stopVideo = () =>{
      setPlaying(false)
      let video = document.getElementsByClassName('app_videoFeed')[0];
      video.srcObject.getTracks()[0].stop();
   };


  return (
    <div className="App">
        <h2 className='title'>CAPTURA WEBCAM</h2>
         <div className='app_container'>
             <video
              className='app_videoFeed'
              height = {HEIGHT}
              width = {WIDTH}
              muted
              autoPlay
            ></video>
         </div>

           <div className='app_input'>
               {playing ? (
                 <button className='btnStop' onClick={stopVideo}>Stop</button>
                 ): (
                 <button className='btnStart' onClick={startVideo}>Start</button>
                 )}      
           </div>
    </div>
  );
}

export default App;
