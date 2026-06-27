const passwordInput = document.getElementById('password')
const  togglebtn = document.getElementById('toggle-password')
const img = document.getElementById('img')
const btnStatus = document.getElementById('status')


let showpassword = false;
togglebtn.addEventListener("click",()=>{
    showpassword = !showpassword

    if(showpassword){
        passwordInput.type = "text"
        img.src = "show.png"
        btnStatus.innerText = "Password is shown"
    }
    else{
         passwordInput.type = "password"
        img.src = "hidden.png"
        btnStatus.innerText = "Password is hidden"

    }

})