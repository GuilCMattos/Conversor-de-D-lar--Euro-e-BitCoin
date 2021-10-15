let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

function converter1() { 
    let input1 = document.getElementById("valor1")
    let valor1 = input1.value
  
    

    fetch(url)
    .then ((res)=> {
        return res.json()
    })
    .then((data)=> { 
        let USDBRL = data.USDBRL.ask
        let conta1 = USDBRL * valor1

    


        let resultado1 = `$${valor1},00 = R$${conta1.toFixed(2)}`
        
        document.getElementById("resposta1").innerHTML = resultado1
        
        



        
    })
}

function converter2() { 

    let input2 = document.getElementById("valor2")
    let valor2 = input2.value

    fetch(url)
    .then ((res)=> {
        return res.json()
    })
    .then((data)=> { 
        let BTC = data.BTCBRL.ask
        let conta2 = BTC * valor2

        if(valor2 < 4) { 
            let resultado2 = `${valor2} bitcoin = R$${conta2.toFixed(3)},00`
            document.getElementById("resposta2").innerHTML = resultado2
        } else { 
            let resultado2m = `${valor2} bitcoin = ${conta2.toLocaleString('pt-BR',{stye:'currency', currency:'BRL'})} milhões`
            document.getElementById("resposta2").innerHTML = resultado2m
        }
        
        
    })

}

function converter3() { 

    let input = document.getElementById("valor3")
    let valor = input.value

    fetch(url)
    .then ((res)=> {
        return res.json()
    })
    .then((data)=> { 
        let EUR = data.EURBRL.ask
        let conta = EUR * valor

       
            let resultado = `$${valor} = R$${conta.toFixed(2)}`
            document.getElementById("resposta3").innerHTML = resultado
   
        
        
        
    })

}
