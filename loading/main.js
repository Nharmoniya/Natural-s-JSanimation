const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
//获取loading-text，获取bg
let load = 0
//声明一个load变量初始值为0
let int = setInterval(loading,50)
//setInterval，几秒执行一次

//声明一个方法为loading，让load自加，如果load>99时，清除Interval重复运行器
function loading(){
  load++
  if (load > 99){
    clearInterval(int)
  }
  //loadText加载文本后inner插入自加的load
  loadText.innerText = `${load}%`
  //
  loadText.style.opacity = scale(load,0,100,1,0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num,in_min,in_max,out_min,out_max)=>{
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}