function exchangeCurrency (event){
    event.preventDefault();
    
    var targetCurrency = document.getElementById('currency').value;
    console.log('Target Currency:', targetCurrency);
  
    var exchangeAmount = document.getElementById ('amount').value;
    console.log('Amount to be exhanged:', exchangeAmount);
  
    document.getElementById ('targetCurrencyCode').innerText = targetCurrency;
    
    fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_bT9axTw5RecXKkaSnVqkpKL7wPqz5945rdMQxFaM')
      .then(function (response){
      return response.json();
      })
      .then(function (data){
        console.log(data);
        
        var CADvalue = data.data.CAD.value;
        console.log('CAD Value:', CADvalue);
        
        var targetValue = data.data[targetCurrency].value  
        console.log('Target Value:', targetValue);
  
        var exchangedValue = (exchangeAmount / targetValue) * CADvalue;
        console.log('Exchanged Value:', exchangedValue);
        var roundedValue = exchangedValue.toFixed(2);
        console.log('Final Value:', roundedValue);
  
        document.getElementById('exchangedAmount').value = roundedValue;
    })
  }