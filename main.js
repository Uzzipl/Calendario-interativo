function colorirDia() {
    // bloco de variáveis
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
  
    if (!days) {
        alert("Favor informe um dia existente no calendário");
    } else {
        if ((days > 0) && (days <= 30)) {
            let td = calendar.getElementsByTagName('td')[parseInt(days) + 1]; 
            td.style.backgroundColor = color;
        } else {
            alert("Favor informar uma data constante no calendário");
        }
    }
  
    var elementos = document.querySelectorAll('td');
  
    // contadores utilizados
    var conttadorAzul = 0, conttadorVerde = 0, conttadorRosa = 0, conttadorRoxo = 0;
  
    // Loop para verificar estilo de cada célula e contar quantas tem cores e quais
    for (let i = 0; i < elementos.length; i++) {
        // obtenho o estilo aplicado do elemento atual
        var estilo = window.getComputedStyle(elementos[i]);
        
        // obtenho a cor de fundo atual da célula
        var corEstilo = estilo.backgroundColor;
  
        // verifica a cor e incrementa o contador correto
        if (corEstilo === "rgb(172, 216, 238)" || corEstilo === "lightblue") {
            conttadorAzul++;
        }
        else if (corEstilo === "rgb(153, 251, 152)" || corEstilo === "palegreen") {
            conttadorVerde++;
        }
        else if (corEstilo === "rgb(255, 182, 193)" || corEstilo === "lightpink") {
            conttadorRosa++;
        }
        else if (corEstilo === "rgb(106, 90, 208)" || corEstilo === "slateblue") {
            conttadorRoxo++;
        }
    }
  
    // Exibindo o contador de cores no console para verificar
    console.log("Azul: " + conttadorAzul);
    console.log("Verde: " + conttadorVerde);
    console.log("Rosa: " + conttadorRosa);
    console.log("Roxo: " + conttadorRoxo);
  }