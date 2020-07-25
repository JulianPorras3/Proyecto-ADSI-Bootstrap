function crear(){
    var Cargo = document.getElementById('Cargo').value;
    var NombreUsuario = document.getElementById('NombreUsuario').value;

    expresion = /\w+@\w+\.+[a-z]/;

    if (Cargo==='' || NombreUsuario===''){
        alert("Todos los campos son obligatorios");
        return false;
    }else if (Cargo.length>30){
        alert("El cargo demasiado largo");
        return false;
    }
    else if (NombreUsuario.length>15){
        alert("Nombre de usuario demasiado largo");
        return false;
    }
    if(Cargo!=='' && NombreUsuario!==''){
        alert('Usuario Creado!');
        window.location.href='../adm/usuarios.html';
    }
}