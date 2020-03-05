let exibir = function (){
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    
    let imc = (peso/(altura*altura)).toFixed(2);

    let div = document.getElementById('resultado');
    div.innerHTML = imc;
    }