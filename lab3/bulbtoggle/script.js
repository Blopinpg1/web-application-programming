const image = document.getElementById('image')
const button = document.getElementById('button')
const btnInfo = document.getElementById('button_info')




// button.addEventListener("click",()=>{

//     if(button.innerText == "Turn ON")
//     {
//         image.src = "onBulb.jpeg"
//         button.innerText ="Turn OFF"
//         btnInfo.innerText = "The bulb is ON"
//     }

//     else{
//         image.src = "offBulb.jpeg"
//         button.innerText ="Turn ON"
//         btnInfo.innerText = "The bulb is OFF"

//     }
    

// })


let isOn = false;

button.addEventListener("click", ()=>{
    isOn = !isOn;

    if(isOn){
         image.src = "onBulb.jpeg";
        button.innerText = "Turn OFF";
        btnInfo.innerText = "The bulb is ON";
    }
    else{
          image.src = "offBulb.jpeg";
        button.innerText = "Turn ON";
        btnInfo.innerText = "The bulb is OFF";

    }
})