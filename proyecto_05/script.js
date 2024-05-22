let producto = prompt("Ingresa un producto");
switch (producto){
    case "camisa":
        alert("Descuento del 10%");
        break;
    case "pantalon":
        alert("Descuento del 15%");
        break;
    case "vestido":
        alert("Descuento del 20%");
        break;
    case "zapatos":
        alert("Descuento del 25%");
        break;
    default:
        alert("Descuento del 0%");
}