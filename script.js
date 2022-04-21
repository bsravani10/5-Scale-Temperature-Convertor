// Fahrenheit Converter
function FahrenheitTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
  
    switch (conversionDegreeType) {
      case 'F':
        temperature = inputDegreeValue;
        break;
      case 'C':
        temperature = eval((inputDegreeValue - 32) * (5 / 9));
        break;
      case 'K':
  
        temperature = eval((inputDegreeValue + 459.67) * (5 / 9));
        break;
      case 'Ra':
  
        temperature = eval(inputDegreeValue + 459.67);
        break;
      case 'Re':
  
        temperature = eval((inputDegreeValue - 32) / 2.25);
        break;
  
    }
    return temperature;
  }

// Celcius Converter

function CelsiusTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
  
    switch (conversionDegreeType) {
  
      case 'C':
        temperature = inputDegreeValue;
        break;
      case 'F':
        temperature = eval((inputDegreeValue * (9 / 5)) + 32);
        break;
      case 'K':
        temperature = eval(inputDegreeValue + 273.15);
        break;
      case 'Ra':
   
        temperature = eval((inputDegreeValue * 1.8) + 32 + 459.67);
        break;
      case 'Re':
      
        temperature = eval(inputDegreeValue * 0.8);
        break;
  
    }
  
    return temperature;
  }

// Kelvin Converter

function KelvinTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
    
    switch (conversionDegreeType) {
      case 'K':
        temperature = inputDegreeValue;
        break;
      case 'F':
        temperature = eval((inputDegreeValue - 273.15) * (9 / 5) + 32);
        break;
      case 'C':
        temperature = eval(inputDegreeValue - 273.15);
        break;
      case 'Ra':
  
        temperature = eval(inputDegreeValue * 1.8);
        break;
      case 'Re':
      
        temperature = eval((inputDegreeValue - 273.15) * 0.8);
        break;
    
    }
    return temperature;
    }

// Rankine Converter

function RankineTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
    
    switch (conversionDegreeType) {
      case 'Ra':
        temperature = inputDegreeValue;
        break;
      case 'F':
        temperature = eval(inputDegreeValue - 459.67);   
        break;
      case 'C':
        temperature = eval((inputDegreeValue - 32 - 459.67) / 1.8);  
        break;
      case 'K':
  
        temperature = eval(inputDegreeValue / 1.8);  
        break;
      case 'Re':
      
        temperature = eval((inputDegreeValue - 32 - 459.67) / 2.25);  
        break;
    
    }
    return temperature;
    }

// Réaumur Converter

function RéaumurTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';
    
    switch (conversionDegreeType) {
      case 'Re':
        temperature = inputDegreeValue;
        break;
      case 'F':
        temperature = eval((inputDegreeValue * 2.25) + 32);  
        break;
      case 'C':
        temperature = eval(inputDegreeValue * 1.25);  
        break;
      case 'K':
  
        temperature = eval((inputDegreeValue * 1.25) + 273.15);  
        break;
      case 'Ra':
  
        temperature = eval((inputDegreeValue * 2.25) + 32 + 459.67); 
        break;
    
    }
    return temperature;
    }

// On Form submission prevent the default action and call the function to update the result

$('form').submit(function (event) {
    event.preventDefault(); // to prevent the default action
    convertInputDegree()
});

function convertInputDegree() {

    let inputDegree = parseInt($('#inputDegree').val());
    let selectInputDegreeType = $('#selectInputDegreeType').val();
    let conversionType = $('#selectConversionType').val();
  
    let resultValue = "";
  
    switch (selectInputDegreeType) {
  
      case "C":
        resultValue = CelsiusTo(inputDegree, conversionType);
        break;
  
      case "F":
        resultValue = FahrenheitTo(inputDegree, conversionType);
        break;
  
      case "K":
        resultValue = KelvinTo(inputDegree, conversionType);
        break;
      
      case "Ra":
        resultValue = RankineTo(inputDegree, conversionType);
        break;

      case "Re":
        resultValue = RéaumurTo(inputDegree, conversionType);
        break;
  
    }
  
    // To prevent NaN
    if (isNaN(inputDegree)) {
      $('#convertedDegree').text('');
      return;
    }
  
    // To update the Degree Unit
    $('#convertedUnit').text(conversionType)
  
    // To update the Degree Value
    if (conversionType === selectInputDegreeType) {
  
      $('#convertedDegree').text(inputDegree);
    } else {
  
      return $('#convertedDegree').text(resultValue.toFixed(2));
  
    }
  
  }

