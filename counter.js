const valor = document.querySelector('#counter');
const aumentar = document.querySelector('#increase');
const diminuir = document.querySelector('#diminuir');
const reset = document.querySelector('#reset');

let contador = 0;

aumentar.onclick = function(){
    contador++;
    checker(contador);
    valor.innerHTML = contador;
}

diminuir.onclick= function(){
    contador--;
    checker(contador);
    valor.innerHTML = contador;
}

reset.onclick = function(){
    contador =0;
    checker(contador);
    valor.innerHTML = contador;
}





function checker(contador){
    if (contador < 0){
        valor.style.color= "red";
    }else if(contador >0){
        valor.style.color= "green ";
    }else{
        valor.style.color= "black";
    }

}