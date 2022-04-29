
// obtener la diferencia de años
export const getDifferentYears = year =>{
    return new Date().getFullYear() - year
}

// Calcular el total a pagar segun la marca
export const calcularMarca = marca =>{
    let incremento;

    switch(marca){
        case 'europeo' :
            incremento = 1.30;
            break;

        case 'americano':
            incremento = 1.15;
            break;

        case 'asiatico':
            incremento = 1.05
                break;
            default:
                break;
    }

    return incremento;
}


// Calcular el tipo de seguro

export const getPlan = plan =>{
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Muestra la primer letra mayuscula/ selecionamos la primer letra / la convertimos a mayuscula / y concatenamos el texto, eliminando la primer letra
export const letraMayuscula = texto =>{
    return texto.charAt(0).toUpperCase()+ texto.slice(1)
}