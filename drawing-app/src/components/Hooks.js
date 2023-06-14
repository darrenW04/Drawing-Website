import {useEffect ,useRef} from "react";
export function useOnDraw(onDraw){
    
    const canvasRef = useRef(null);

    const isDrawingRef = useRef(false);

    const mouseMoveListenerRef = useRef(null);
    const mouseDownListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);


    function setCanvasRef(ref){
        if(!ref) return;

        canvasRef.current = ref;
        initMouseMoveListener();
        initMouseDownListener();
        initMouseUpListener();

    }

    function initMouseMoveListener(){
        const mouseMoveListener = (e) => {
            if(isDrawingRef){
                const point = pointInCanvas(e.clientX,e.clientY);
                const context = canvasRef.current.getContext('2d');
                if(isDrawingRef.current == true){
                    if (onDraw) onDraw(context,point);

                }
            }
        }
        window.removeEventListener("mousemove", mouseMoveListenerRef.current);
        mouseMoveListenerRef.current = mouseMoveListener;
        window.addEventListener("mousemove", mouseMoveListener)
    }


    function initMouseUpListener(){
        const listener = () => {
            isDrawingRef.current = false;
        }
        window.removeEventListener("mouseup", mouseUpListenerRef.current);
        mouseUpListenerRef.current = listener;
        canvasRef.current.addEventListener("mouseup",listener)
    }


    function initMouseDownListener(){
        if(!canvasRef.current) return;
        const listener = () => {
            isDrawingRef.current = true;
            console.log("PRESS DOWN");
        }
        canvasRef.current.removeEventListener("mousedown", mouseDownListenerRef.current);
        mouseDownListenerRef.current = listener;
        canvasRef.current.addEventListener("mousedown",listener)
    }


    function pointInCanvas(clientX, clientY){
        if(canvasRef.current){
            const boundingRect = canvasRef.current.getBoundingClientRect();
            return{
                x: clientX-boundingRect.left ,
                y: clientY-boundingRect.top
            }
        }
        return null;
    }
    return setCanvasRef;
};