var input = "Tenet";


function inverterString(text){
    if(text){
        var textInvertido = "";

        for(var i = text.length; i > 0; i--){
            console.log(text.charAt(i-1))
            textInvertido = textInvertido.concat(text.charAt(i-1));
        }
        return textInvertido;
    }
    return "";
}

console.log(inverterString(input));