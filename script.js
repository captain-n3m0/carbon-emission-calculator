function calculateCarbonFootprint() {
    // Get user inputs
    var miles = document.getElementById('miles').value;
    var kwh = document.getElementById('kwh').value;
    var therms = document.getElementById('therms').value;

    // Calculate carbon footprint
    var carbonFootprint = (miles * 0.404) + (kwh * 1.34) + (therms * 11.7);

    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your carbon footprint is ' + carbonFootprint.toFixed(2) + ' metric tons CO2e per year.';
}
