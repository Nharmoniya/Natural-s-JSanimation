//DOM获取到所有的.panel并存出再panels
const panels = document.querySelectorAll('.panel')
//foreach遍历panels
panels.forEach(panel=>{
  //添加一个事件监听器，监听他的click事件
  panel.addEventListener('click',()=>{
    removeActiveClasses()
    //给别的panel
    panel.classList.add('active')
  })
})
//声明一个方法，删除class上的active
function removeActiveClasses(){
  //遍历panel
  panels.forEach(panel=>{
    //删除classlist中的active
    panel.classList.remove('active')
  })
}