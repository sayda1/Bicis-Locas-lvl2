//FUNCION PARA CREAR UN ESPAN
function crearSpan(elemento , mensaje)
{
    if(elemento.next().length==0){
        var span = $(document.createElement('span'));
        var spanMensaje=span.html(mensaje);
        elemento.parent().append(spanMensaje); 
    }else{
        if(elemento.next()==elemento.parent().find('span')){
            elemento.next().append(mensaje);
        }else{
            elemento.next().remove();
            var span = $(document.createElement('span'));
            var spanMensaje=span.html(mensaje);
            elemento.parent().append(spanMensaje); 
        }
    }
}
//FUNCION GENERAL PARA VALIDAR EL FORMULARIO
function validateForm()
{
   //LLAMANDO TODOS LOS IDS
    var nombre = $('#name'); 
    var apellido =$('#lastname');
    var correo =$('#input-email');
    var contra =$('#input-password');
    var selc=$('#elejir');
    
    //VALIDACION DEL NOMBRE
    if (nombre.val()==""){
        crearSpan( nombre , "Ingrese su nombre.");
    }else{
       $("span").remove();
    }
    
    //VALIDACION DEL APELLIDO
    if(apellido.val()==""){
        crearSpan(apellido , "Ingrese su apellido.");
    }else{
        $("span").remove();
    }
    //VALIDACION DE CORREO
    var expresion=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if(correo.val()==""){
        crearSpan(correo , "Ingres su correo.");
    }else if (!expresion.test(correo)){
        $("span").remove();
        crearSpan(correo , "verifique su correo.");
    }else{
        $("span").remove();
    }
    
    //VALIDACION DE LA CONTRASEÑA
    if(contra.val().length<6){
        crearSpan(contra , "6 caracteres.");
    }else{
       $("span").remove();  
    }
    //VALIDACION DE SELEC
    if(selc.val()==0){
        crearSpan(selc , 'Escoja una opcion .');
    }else{
        $("span").remove(); 
    }
}