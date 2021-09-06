function start(){

const canvas= document.querySelector("#glcanvas");

const gl =canvas.getContext("webgl");

if(!gl){

    alert("el nav no es compatible con WEBGL")
    return;
}

gl.clearColor(1.0 , 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
}