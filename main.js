const peso = document.getElementById('peso')
const altura= document.getElementById('altura')
const pantalla= document.getElementById('pantalla')


function calcular(){
    let resultado={}
    let cambio={}
    if(isNaN(peso.value) || isNaN( altura.value )){
        alert("padre esa welta esta mal")
    }else{
        if(altura.value <3){
            resultado= peso.value/(altura.value*altura.value)
            cambio= resultado.toFixed(2)
        }else if(altura.value <=250){
            let altura2= altura.value/100
            resultado= peso.value/(altura2*altura2)
            cambio= resultado.toFixed(2)
        }else{
            alert("le quedo mal")
        }if(cambio <=18.5 ){
            pantalla.style.backgroundColor="blue"   
        }if(cambio <=24.9){
            pantalla.style.backgroundColor="green"
        }if(cambio<=29.9){
            pantalla.style.backgroundColor="yellow"
            pantalla.style.color="black"
        }
        if(cambio >= 30){
            pantalla.style.backgroundColor="red"
        }
        pantalla.innerHTML=`${cambio}`
    }

}