function validar(){
    var Correo = document.getElementById('Correo').value;
    var Contraseña = document.getElementById('Contraseña').value;

    expresion = /\w+@\w+\.+[a-z]/;

    if (Correo==='' || Contraseña===''){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (Correo.length>80){
        alert("Correo demasiado largo");
        return false;
    }
    else if (!expresion.test(Correo)){
        alert("Correo no es valido");
        return false;
    }
    if(Correo==='admin@hotmail.com' && Contraseña==='123456'){
        alert('Bienvenido Administrador!');
        window.location.href='../Bootstrap/adm/index.html';
    }
    if(Correo==='directora@hotmail.com' && Contraseña==='123456'){
        alert('Bienvenida Directora!')
        window.location.href='../Bootstrap/directora/index.html';    
    }
    if(Correo==='cliente@hotmail.com' && Contraseña==='123456'){
        alert('Bienvenido Cliente!')
        window.location.href='../Bootstrap/cliente/index.html';
    }
    else if (Contraseña.length>=80){
        alert("Contraseña es muy grande");
        return false;
    }
    else if(Contraseña.length<=3){
        alert("Contraseña muy corta");
        return false;
    }
    else if(Contraseña!=='123456'){
        alert("Contraseña Incorrecta");
        return false;
    }
  
}