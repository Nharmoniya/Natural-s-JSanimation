const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
//DOM获取class


btn.addEventListener('click',()=>{
  search.classList.toggle('active')
  //input按钮直接focus上，就是默认直接点击它，然后会一直弹输入符
  input.focus()
})