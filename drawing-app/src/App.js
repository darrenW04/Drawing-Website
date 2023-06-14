import './App.css';
import Canvas from "./components/Canvas"
import React, { useState,useEffect } from 'react';

function App() {
    const [colorf, setColor] = useState("#000000");
    const [clear, setClear] = useState(false);
    const [Stylus, setStylus] = useState("circle");


  useEffect(() => {

  },[])
  function ChangeRed(){
    return(
      <>
        <button
        className='RedButton'
        type = "button"
        onClick={() => setColor("#FF0000")}
        >Red
        </button>
      </>
    );
  }
  function ChangeGreen(){
    return(
      <>
        <button
        className='GreenButton'
        type = "button"
        onClick={() => setColor("#00FF00")}
        >Green
        </button>
      </>
    );
  }
  function ChangeBlue(){
    return(
      <>
        <button
        className='BlueButton'
        type = "button"
        onClick={() => setColor("#0000FF")}
        >Blue
        </button>
      </>
    );
  }

  function Clear(){
    

    console.log(clear)
    return(
      <button 
        className='BlackButton'
        type="button"
        onClick={() => setClear(true)}
        > 
          Clear
      </button>
    );
  }
  function Circle(){
    return(
      <>
        <button
        className='BlackButton'
        type = "button"
        onClick={() => setStylus("circle")}
        >Regular
        </button>
      </>
    );
  }
  function SquareHolo(){
    return(
      <>
        <button
        className='BlackButton'
        type = "button"
        onClick={() => setStylus("rectHolo")}
        >Square Box
        </button>
      </>
    );
  }
  function SquareSolid(){
    return(
      <>
        <button
        className='BlackButton'
        type = "button"
        onClick={() => setStylus("rectSolid")}
        >Solid Rectangle
        </button>
      </>
    );
  }

  return (
    <div>
     
      
      <body className='Buttons'>
        <ChangeRed/>
        <ChangeGreen/>
        <ChangeBlue/>
        <Clear/>
      </body>

      <body className='App'>
     
        <Canvas 
          width = {1200}
          height = {650}
          color = {colorf}
          clear = {clear}
          drawingStyle={Stylus}
        />
      </body>
      <body className='Buttons'>
        <Circle></Circle>
        <SquareHolo></SquareHolo>
        <SquareSolid></SquareSolid>
      </body>
    </div>
  );
}

export default App;
