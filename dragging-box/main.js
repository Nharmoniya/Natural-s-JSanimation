let dragging = false;
let position = null;


drag.addEventListener('mousedown', function (e) {
  dragging = true; //监听mousedown事件，正在移动
  position = [e.clientX, e.clientY];//此时的位置为鼠标指针的X和Y
});

document.addEventListener('mousemove', function (e) {
  if (dragging === false) {return;}//没有移动就别拖
  const x = e.clientX;
  const y = e.clientY;
  const deltaX = x - position[0]; //声明一个deltaX/Y记录保存当鼠标移动后X/Y减去先前position位置
  const deltaY = y - position[1];
  const left = parseInt(drag.style.left || 0);//让left和top赋值为拖拽后的left和top记得给一个0，因为可能移动的距离为0
  const top = parseInt(drag.style.top || 0);
  drag.style.left = left + deltaX + 'px';//最后他的位置为原本left和top的位置加上delta移动后的位置
  drag.style.top = top + deltaY + 'px';
  position = [x, y];
});
document.addEventListener('mouseup', function (e) {
  dragging = false;//监听mouseup，拖拽为false
});