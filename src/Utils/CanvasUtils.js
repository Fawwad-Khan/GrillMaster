export const registerRoundedRectangle = () =>
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, r) {
    if (width < 2 * r) r = width / 2;
    if (height < 2 * r) r = height / 2;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + width, y, x + width, y + height, r);
    this.arcTo(x + width, y + height, x, y + height, r);
    this.arcTo(x, y + height, x, y, r);
    this.arcTo(x, y, x + width, y, r);
    this.closePath();
    return this;
  }

export const changeCanvasDimensions = (canvasOptions) => {
  const {canvas, width, height} = canvasOptions;
  canvas.height = height;
  canvas.width = width;
  return true
}

export const addRoundRectangleToCanvas = (roundRectOptions) => {
  const {context, x, y, width, height} = roundRectOptions;  
  context.strokeStyle = "#a9a9a9";
  context.fillStyle = "#a9a9a9";
  context.roundRect(x, y, width, height, 4).stroke();
  return true
}

export const refreshCanvas = (canvasOptions) => {
  const {context, width, height} = canvasOptions;
  return context.clearRect(0, 0, height, width)
};

export function ToolTip(canvas, region, text, width) {

  const me = this,                                
      div = document.createElement("div"),      
      parent = canvas.parentNode;               
  let visible = false;                          
  
  div.style.cssText = `position:fixed;padding:7px;background:white;border:1px solid black;pointer-events:none;width:${width}px;border-radius:5px;`;
  div.innerHTML = text;
  
  this.show = function(pos) {
    if (!visible) {                             
      visible = true;                           
      setDivPos(pos);                           
      parent.appendChild(div);                  
      setTimeout(hide, 1000);                
    }
  }
  
  
  function hide() {
    visible = false;                            
    parent.removeChild(div);                    
  }

  
  function check(e) {
    const pos = getPos(e),
        posAbs = {x: e.clientX, y: e.clientY};  
    if (!visible &&
        pos.x >= region.x && pos.x < region.x + region.w &&
        pos.y >= region.y && pos.y < region.y + region.h) {
      me.show(posAbs);                          
    }
    else setDivPos(posAbs);                     
  }
  
  
  function getPos(e) {
    const r = canvas.getBoundingClientRect();
    return {x: e.clientX - r.left, y: e.clientY - r.top}
  }
  

  function setDivPos(pos) {
    if (visible){
      if (pos.x < 0) pos.x = 0;
      if (pos.y < 0) pos.y = 0;
      div.style.left = pos.x + "px";
      div.style.top = pos.y + "px";
    }
  }
  
  canvas.addEventListener("mousemove", check);
  canvas.addEventListener("click", check);
  
}