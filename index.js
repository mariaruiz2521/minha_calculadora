function somar(){
    let n1 = Number(document.getElementById ('numero1').value);
    let n2 = Number(document.getElementById ('numero2').value);
    document.getElementById('resultado').innerText= `resultado: ${n1+n2}`

}
function subtrair(){
    let n1 = Number(document.getElementById ('numero1').value);
    let n2 = Number(document.getElementById ('numero2').value);
    document.getElementById('resultado').innerText = `resultado: ${n1 - n2}`
    
}
function multiplicar(){
    let n1 = Number(document.getElementById ('numero1').value);
    let n2 = Number(document.getElementById ('numero2').value);
    document.getElementById('resultado').innerText = `resultado: ${n1 * n2}`
    
}

function dividir(){
    let n1 = Number(document.getElementById ('numero1').value);
    let n2 = Number(document.getElementById ('numero2').value);
    document.getElementById('resultado').innerText = `resultado: ${n1 / n2}`
    if(n2==0){
        alert("numero0 não é permitido")
    }else{

         document.getElementById('resultado').innerText = `resultado: ${n1 / n2}`
    }
    
}
