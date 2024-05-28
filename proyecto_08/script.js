let edad; // Entero
let ti=""; // guarda el ingreso (si/no) del usuario
let permiso; // Booleano

edad = parseInt(prompt("Ingresa tu edad"));
ti = prompt("Tienes permiso? (si / no)");

if(ti == "si" || ti == "Si" || ti == "SI" || ti == "sí" || ti == "Sí"){
  permiso=true;
}else{
  permiso=false;
}

if (edad >= 18 && permiso == true){
  alert("Puedes conducir el auto!!")
}else{
  alert("No puedes conducir el auto");
}
