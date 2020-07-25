function proceso(){
    var Referencia = document.getElementById('Referencia').value;
    var Maquina = document.getElementById('Maquina').value;

    expresion = /\w+@\w+\.+[a-z]/;

    if (Referencia==='' || Maquina===''){
        alert("Todos los campos son obligatorios");
        return false;
    }else if (Referencia.length>30){
        alert("Referencia demasiado largo");
        return false;
    }
    else if (Maquina.length>15){
        alert("Numero maquina demasiado largo");
        return false;
    }
    if(Referencia!=='' && Maquina!==''){
        alert('Proceso Creado Exitosamente!');
        window.location.href='../directora/procesos.html';
    }
}