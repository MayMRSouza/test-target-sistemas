var faturamentos = [
    {
        uf:"SP",
        valor: 67836.43
    },
    {
        uf:"RJ",
        valor: 36678.66
    },
    {
        uf:"MG",
        valor: 29229.88
    },
    {
        uf:"ES",
        valor: 27165.48
    },
    {
        uf:"Outros",
        valor: 19849.53
    },
]


function calculaPorcentagem(total, valor){
    return (valor/total) * 100
}

function calculaTotal(f){
    var total = 0;
    f.forEach(faturamento => {
        total = faturamento.valor + total;
    });
    return total;
    
}

var total = calculaTotal(faturamentos);

faturamentos.forEach(faturamento => {
    console.log(`${faturamento.uf} representou ${calculaPorcentagem(total, faturamento.valor)}% do faturamento total ${total} da empresa`)
});

