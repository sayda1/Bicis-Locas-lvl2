// desaparicion del nombre
var span=document.createElement("span");
function mensajeNombre(){
    var nom=document.getElementById("name");
    span.innerHTML="escriba correctamente su nombre";
    nom.parentNode.appendChild(span);  
}
var spanNom=document.createElement("span");
function nombreAviso(){
    console.log("mamacita");
    var nombre2=document.getElementById("name");
    spanNom.innerHTML="debe ingresar su nombre";
   nombre2.parentNode.appendChild(spanNom);
}


//desaparicion del apellido
var apeSpan=document.createElement("span");
function mensajeApellido(){
    var apelli=document.getElementById("lastname");
    apeSpan.innerHTML="escriba correctamente su apellido";
    apelli.parentNode.appendChild(apeSpan);  
}
var apeSpan2=document.createElement("span");
function mensajeAviso(){
    var apellido2=document.getElementById("lastname");
    apeSpan2.innerHTML="debe ingresar su apellido";
    apellido2.parentNode.appendChild(apeSpan2);  
}

//desaparicion del correo
var span3=document.createElement("span");
function mensajeCorreo(){
    var email = document.getElementById("input-email"); 
    span3.innerHTML="verifique su correo";
    email.parentNode.appendChild(span3);
}

//desaparicion de la contraseña
var span4 =document.createElement("span");
function  contrasenia (){
    var password = document.getElementById("input-password");
    span4.innerHTML="Su contraseña de tener almenos 6 caracteres";
    password.parentNode.appendChild(span4);
}

//desaparcion del selec
var span5=document.createElement("span");
function mensajeSelec(){
    var opcione= document.querySelector("select");
    span5.innerHTML="elija una opcion";
    opcione.parentNode.appendChild(span5);
}

//funcion general
function validateForm()
{
    var valiNombre = /^[a-zA-Z]*$/;
    var valiCorreo = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var contra = document.getElementById("input-password").value;
    var twitter = document.getElementById("input-social").value;
    var selec= document.querySelector("select").value;
    
    if(nombre ==="" ||apellido===""||correo===""||contra===""){
        nombreAviso();
        mensajeAviso();
        mensajeCorreo();
        contrasenia ();
        mensajeSelec();
    }else{
        spanNom.style.display="none";
        apeSpan2.style.display="none";
        span3.style.display="none";
        span4.style.display="none";
    }
    
    //validando Nombre
    if (!valiNombre.test(nombre))
    {
        mensajeNombre();
    }else{
        if(nombre.toLowerCase())
        {   
            document.getElementById("name").value=nombre.charAt(0).toUpperCase()+nombre.slice(1);
            span.style.display="none";
            mensajeNombre();
        }else{
            nombreAviso(); 
            span.style.display="none";
        }  
    }
 
  //validando Apellido
    if (!valiNombre.test(apellido))
    {
        mensajeApellido();
    }else{
        if(apellido.toLowerCase())
        {
            document.getElementById("lastname").value=apellido.charAt(0).toUpperCase()+apellido.slice(1);
            mensajeApellido();
            apeSpan.style.display="none";
        }else{
            mensajeAviso(); 
        }  
    }
    
  //validando Correo
 if (!valiCorreo.test(correo)){
        mensajeCorreo();
        return false; 
    }else{
       span3.style.display="none";
    }
 
 //validando la contraseña
 if (contra.length<=6){
        contrasenia();
       
    }else{
       
       span4.style.display="none";
    } 
   
    
    // validando el selec opciones
    if (selec ==0) {
       mensajeSelec();
        return false;
    } else {
        span5.style.display="none";
    } 
}