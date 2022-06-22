const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
//DOM获取

//声明一个计数器currentActive
let currentActive = 1;

//给next按钮监听点击事件，用箭头函数直接触发方法，每点击一次计数器累加1，如果累加器的数大于获取到的circles的长度，就让他赋值和circles一样，再触发一个update
next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

//给prev按钮监听点击事件，累加器累减1，如果累加器小于1，就将累加器赋值为1，防止其变成负数了，再触发update事件
prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  //forEach遍历所有的circle，并获取他的数量赋值为idx
  circles.forEach((circle, idx) => {
    //如果idx数量小于累加器数量，给circle.classlist增加active，否则的话remove掉active
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  //DOM获取所有带.active的元素
  const actives = document.querySelectorAll('.active');

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

  if(currentActive === 1) {
    prev.disabled = true
  } else if(currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}