var input = require("./input-test-3")

function dadosFaturamento(faturamentoMeses){
    var totalDias = 0; totalFaturamento=0; menorFaturamento=Number.MAX_VALUE; maiorfaturamento=0;

    if(faturamentoMeses&& Array.isArray(faturamentoMeses)){
        faturamentoMeses.forEach(faturamentoMes => {
            if(faturamentoMes.valor > 0){
                totalDias++;
                totalFaturamento = totalFaturamento + faturamentoMes.valor;
                menorFaturamento = faturamentoMes.valor < menorFaturamento? faturamentoMes.valor : menorFaturamento;
                maiorfaturamento = faturamentoMes.valor > maiorfaturamento? faturamentoMes.valor : maiorfaturamento;
            }
        });
    }else{
        menorFaturamento = 0;
    }

    return {
        totalDias:totalDias, 
        totalFaturamento:totalFaturamento,
        media: totalFaturamento/totalDias,
        menorFaturamento: menorFaturamento,
        maiorfaturamento: maiorfaturamento
    }
}

function diasAcimaDaMedia(media, faturamentoMeses){
    var dias = [];
    if(faturamentoMeses&& Array.isArray(faturamentoMeses)){
        faturamentoMeses.forEach(faturamentoMes => {
            if(faturamentoMeses.valor > media){
                dias << faturamentoMeses.dia;
            }
        });
    }

    return dias;
}

var dados = dadosFaturamento(input);
var diasAcMedia = diasAcimaDaMedia(dados.media, input);

console.log(`O menor valor de faturamento ocorrido em um dia do mês foi ${dados.menorFaturamento}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês ${dados.maiorfaturamento}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi ${diasAcMedia.length}`);
