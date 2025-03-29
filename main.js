function colorirDia(){
    // bloco de variavveis
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');

    if(!days){
        alert("Favor informe um dia existente no calendario");
    }else{
        if((days > 0) && (days<30)){
            let td = calendar.getElementsByTagName('td'); 
            td.style.backgroud-color == color;
        }else{
            alert("Favor informar uma data constante no calendario")
        }
    }
    if(!mes){
        alert("Favor informe um mês existente no calendario");
    }else{
        if((mes > 0) && (mes<12)){
            let td = calendar.getElementsByTagName('td'); 
            td.style.backgroud-color == color;
        }else{
            alert("Favor informar uma data constante no calendario")
        }
    }

    var elementos = document.querySelectorAll('td');

}