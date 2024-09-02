/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ
*/ 

let primaryBtn = document.querySelector('primarybtn')
let secondaryBtn = document.querySelector('sbtn');



secondaryBtn.addEventListener('click',  async(e) => {
  e.preventDefault()
  
  let email = document.querySelector('').value
  let password = document.querySelector('').value
  
  if (email.trim().length  < 6 || email.trim().length  > 30) return alert('email is not valid')
  
  if (password.trim().length  < 4 || password.trim().length  > 30) return alert('password is not valid')
  
  let jsonObj = JSON.stringify({
    email : email.toString(), 
    password : password.toString()
  })
  
  
  let {error, success} = await usePost('/auth/login')
  
  if (error) return alert(error)
  
  if (success) return window.location.replace('/')
  
  
  return alert('unknown Error')
})












