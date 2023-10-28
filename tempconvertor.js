function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromScale = document.getElementById("fromScale").value;
    const toScale = document.getElementById("toScale").value;
    let output;

    if (fromScale === "celsius") {
        if (toScale === "fahrenheit") {
            output = `${inputTemp}°C is equal to ${(inputTemp * 9) / 5 + 32}°F`;
        } else if (toScale === "kelvin") {
            output = `${inputTemp}°C is equal to ${inputTemp + 273.15}K`;
        } else {
            output = "Invalid conversion.";
        }
    } else if (fromScale === "fahrenheit") {
        if (toScale === "celsius") {
            output = `${inputTemp}°F is equal to ${((inputTemp - 32) * 5) / 9}°C`;
        } else if (toScale === "kelvin") {
            output = `${inputTemp}°F is equal to ${
        ((inputTemp - 32) * 5) / 9 + 273.15
      }K`;
        } else {
            output= "Invalid conversion.";
        }
    } else if (fromScale === "kelvin") {
        if (toScale === "celsius") {
            output = `${inputTemp}K is equal to ${inputTemp - 273.15}°C`;
        } else if (toScale === "fahrenheit") {
            output = `${inputTemp}K is equal to ${
        ((inputTemp - 273.15) * 9) / 5 + 32
      }°F`;
        } else {
            output = "Invalid conversion.";
        }
    } else {
        output = "Invalid conversion.";
    }

    document.getElementById("output").textContent = output;
}