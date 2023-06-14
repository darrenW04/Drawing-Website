import { useOnDraw } from "./Hooks";


const Canvas = ({width,height,color,drawingStyle,clear}) => {
    
    
    const setCanvasRef = useOnDraw(onDraw);

    function onDraw(context,point){
        console.log(clear)
        /*if(clear){
            context.clearRect(0, 0, width, height);
            clear = false;
        }*/
        context.fillStyle = color;
        context.strokeStyle = color;
        context.beginPath();
        if(drawingStyle=="circle"){
            context.arc(point.x,point.y, 10 , 0 , 2*Math.PI);
        }
        else if(drawingStyle == 'rectHolo'){
            context.strokeRect(point.x-50,point.y-50,100,100);
        }
        else if(drawingStyle == 'rectSolid'){
            context.rect(point.x-50,point.y-50,100,100)
        }


        context.fill();
        context.closePath();


    }

    return (
        <canvas
            width={width}
            height = {height}
            style = {canvasStyle}
            ref = {setCanvasRef}
        />
   
    );
}

export default Canvas;

const canvasStyle = {
    border: "5px dashed grey"
}