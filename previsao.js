async function getPrevisao() {
    const lat = document.getElementById('lat').value;
    const long = document.getElementById('long').value;

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m`);
        const data = await response.json();
        console.log(data);
        document.getElementById('previsao').value += "Previsão da temperatura atual na região: " + data.current.temperature_2m + "ºC";
        }
     catch(error) {
        alert(error.message);
    
    }

}



