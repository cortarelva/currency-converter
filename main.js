const endpoint= 'https://api.exchangeratesapi.io/latest';


const from = document.querySelector('from');
const to = document.querySelector('to');

//------------recebe e mostra a data atualizada-------------------------------------------------------

function date(){
    fetch(endpoint)
    .then(res => res.json())
    .then(data =>{
        document.querySelector('#date').textContent = data.date;
    });
    
}



//----recebe o valor do input
function currAmount(){
    let amount = document.getElementById("from-amount").value;
    return amount;
}

//----recebe o value da moeda de entrada--------------------------------------------------------
function fromCurrency(){

    let value = document.getElementById('from').value;
        if(value == 1){
            fetch(endpoint)
            .then(res => res.json())
            .then(data => { 
                fromNum =  parseFloat(data.rates.AUD);              
            });           
        } if(value == 2){
            fetch(endpoint)
            .then(res => res.json())
            .then(data => { 
                fromNum =  parseFloat(data.rates.CAD);              
            });           
        } if(value == 3){
            fetch(endpoint)
            .then(res => res.json())
            .then(data => { 
                fromNum =  parseFloat(data.rates.USD);              
            });           
        } if(value == 4){
            fetch(endpoint)
            .then(res => res.json())
            .then(data => { 
                fromNum =  parseFloat(data.rates.GBP);              
            });           
        } if(value == 5){
            fetch(endpoint)
            .then(res => res.json())
            .then(data => { 
                fromNum =  parseFloat(data.rates.NOK);              
            });           
        }

        return fromNum;
}

//------recebe o value da moeda de saida------------------------------------------------------------------
function toCurrency(){

    let value = document.getElementById('to').value;
            if(value == 1){
                fetch(endpoint)
                .then(res => res.json())
                .then(data => { 
                    toNum =  parseFloat(data.rates.AUD);              
                });           
            } if(value == 2){
                fetch(endpoint)
                .then(res => res.json())
                .then(data => { 
                    toNum =  parseFloat(data.rates.CAD);              
                });           
            } if(value == 3){
                fetch(endpoint)
                .then(res => res.json())
                .then(data => { 
                    toNum =  parseFloat(data.rates.USD);              
                });           
            } if(value == 4){
                fetch(endpoint)
                .then(res => res.json())
                .then(data => { 
                    toNum =  parseFloat(data.rates.GBP);              
                });           
            } if(value == 5){
                fetch(endpoint)
                .then(res => res.json())
                .then(data => { 
                    toNum =  parseFloat(data.rates.NOK);              
                });           
    }
            return toNum;
}
//-------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------

function convertCurrency(){
  
    let amount = currAmount();
    let fromcurrency = parseFloat(fromCurrency());
    let tocurrency = parseFloat(toCurrency());

    let result = amount / fromcurrency * tocurrency;

    document.getElementById('to-amount').innerHTML = result.toFixed(2);

}

