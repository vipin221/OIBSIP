function myfunc() {
    const type = document.getElementById('type');
    const typeValue = type.value;
    var input = document.getElementById('ip');
    var value = parseFloat(input.value);

    var numberPattern = /^\d+$/;
    if (!numberPattern.test(value)) {
        window.alert( "Please input valid Number");
    }

    if (typeValue === "fahrenheit") {
        let celsius = (value - 32) * 5 / 9;
        let output1 = document.getElementById('op1');
        output1.innerHTML = celsius.toFixed(2) + "&#8451";


        // for kelvin 
        let kelvin = (value - 32) * 5 / 9 + 273.15;
        let output2 = document.getElementById('op2');
        output2.innerHTML = kelvin.toFixed(2) + "&#8490";

    }
    if (typeValue === "celcius") {
        let fahrenheit = (value * 9 / 5) + 32;
        let output1 = document.getElementById('op1');
        output1.innerHTML = fahrenheit.toFixed(2) + "&#8457";

        let kelvin = (value + 273.15);
        let output2 = document.getElementById('op2');
        output2.innerHTML = kelvin + "&#8490";

    }
    if (typeValue === "kelvin") {
        let fahrenheit = (value - 273.15) * 9 / 5 + 32;
        let output1 = document.getElementById('op1');
        output1.innerHTML = fahrenheit.toFixed(2) + "&#8457";



        let celcius = (value - 273.15);
        let output2 = document.getElementById('op2');
        output2.innerHTML = celcius.toFixed(2) + "&#8451";

    }
}