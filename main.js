const peso = document.getElementById('peso')
const altura= document.getElementById('altura')
const pantalla= document.getElementById('pantalla')


function calcular(){
    if(isNaN(peso.value) || isNaN( altura.value )){
        alert("padre esa welta esta mal")
    }else{
        if(altura.value >3){
            let altura2= (altura.value*100)
            let resultado= (peso.value/altura2)**2
            pantalla.innerHTML(resultado)
        }else if(altura.value <3){
            
        }
    }

}