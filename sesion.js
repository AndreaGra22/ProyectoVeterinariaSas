const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data)
  
    if(data.username =="admin" && data.password =="1234"){
        window.location="index.html";
    }
    else{
        alert("Datos incorrectos",'','error')
    }
})