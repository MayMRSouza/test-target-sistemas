let valorEntrada = 21

function isFibonacci(n){
    var numeroAnterior=1, numeroAtual=1, soma=0, i=0;

    while(soma < n){
        soma = numeroAtual + numeroAnterior;
        numeroAnterior = numeroAtual;
        numeroAtual = soma;
        if(soma==n){
            return true;
        }
    }
    return false;
}

if(isFibonacci(valorEntrada)){
    console.log(`O numero ${valorEntrada} é fibonacci`);
}else{
    console.log(`O numero não ${valorEntrada} é fibonacci`);
}