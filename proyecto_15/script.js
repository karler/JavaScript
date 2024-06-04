
let pasos = 0;
let distRecorida = 0
let medidaCadaPaso = 2.3
while(distRecorida <= 25){
    pasos += 1
    distRecorida = pasos*medidaCadaPaso
    // distRecorrida += medidaCadaPaso
    alert("He recorrido " + distRecorida + " metros")
}

alert("Llegué al mercado de Urubamba")