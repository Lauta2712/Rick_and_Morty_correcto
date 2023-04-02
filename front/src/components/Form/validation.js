export default function validation (inputs){
    const errors = {};
    const regexPass = new RegExp("[0-9]");


    if (!/\S+@\S+\.\S+/.test(inputs.username)){
        errors.username = "Debe ser un email válido";
    }
    if (!inputs.username){
        errors.username = "Este campo es obligatorio";
    }
    if (inputs.username.length > 35){
        errors.username = "Debe contener como máximo 35 caracteres";
    } 
    if (!regexPass.test(inputs.password)){
        errors.password = "Al menos un número";
    }
    if (inputs.password.length < 6 || inputs.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }

    return errors;
}