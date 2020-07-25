function registro(){
    var Nombre = document.getElementById('Nombre').value;
    var Correo1 = document.getElementById('Correo1').value;
    var Contraseña1 = document.getElementById('Contraseña1').value;

    expresion = /\w+@\w+\.+[a-z]/;

    if (Nombre===''|| Correo1==='' || Contraseña1===''){
        alert("Por favor verifique los campos");
        return false;
    }
    else if(Nombre.length>30){
        alert("Nombre demasiado grande");
        return false;
    }
    else if(Correo1.length>80){
        alert("Correo demasiado largo");
        return false;
    }
    else if(Contraseña1<3){
        alert("Contraseña es muy corta")
    }
    else if(!expresion.test(Correo1)){
        alert("Correo no valido");
        return false;
    }
    if(Nombre==='Julian Porras' && Correo1==='admin@hotmail.com' && Contraseña1==='123456'){
        alert('Registro Correcto!');
        window.location.href='../Bootstrap/login.html';
    }

    if (Nombre!=='' || Correo1!=='' || Contraseña1!==''){
        alert("Registro Correcto")
        window.location.href='../Bootstrap/login.html';
    }
    else if (Contraseña1.length>=60){
        alert("La contraseña es muy larga");
        return false;
    }
    else if (Contraseña1.length<=5){
        alert("La contraseña es muy corta");
        return false;
    }
}