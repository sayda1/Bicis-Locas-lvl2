function removeMessage(_inputID)
{
	var elemento = document.getElementById(_inputID);
	if(elemento.nextSibling != null)
	{
		elemento.parentNode.removeChild(elemento.nextSibling);
	}
}

function crearSpan(_inputID, _message)
{
	var elemento = document.getElementById(_inputID);
	if(elemento.nextSibling == null)
	{
		var span = document.createElement("span");
		span.innerHTML = _message;
		elemento.parentNode.appendChild(span);
	}else{
		if(elemento.nextSibling.tagName == "SPAN")
		{
			elemento.nextSibling.innerHTML = _message;
		}else{
			elemento.parentNode.removeChild(elemento.nextSibling);
			var span = document.createElement("span");
			span.innerHTML = _message;
			elemento.parentNode.appendChild(span);
		}
	}
}

function validateForm(){
    var valiNombre = /^[a-zA-Z]*$/;
    var valiCorreo = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value;
    var contra = document.getElementById("input-password").value;
    var twitter = document.getElementById("input-social").value;
    var selec= document.querySelector("select").value;
    // validacion del nombre
    if(nombre===""){
        crearSpan("name" , "Ingrese su nombre.")
    }else if (!valiNombre.test(nombre))
    {
        crearSpan("name","Escriba su nombre correctamente.")
    }else{
        if(nombre.toLowerCase())
        {   
            document.getElementById("name").value=nombre.charAt(0).toUpperCase()+nombre.slice(1);
            removeMessage("name");
        }else{
           crearSpan("name" , "Escriba su nombre correctamente.");
            removeMessage("name");
        }  
    }
    //validacion del apellido
    if (apellido===""){
        crearSpan("lastname" , "Ingrese su apellido.");
    }else if (!valiNombre.test(apellido))
    {
        crearSpan("lastname","Escriba su apellido correctamente.")
    }else{
        if(apellido.toLowerCase())
        {    document.getElementById("lastname").value=apellido.charAt(0).toUpperCase()+apellido.slice(1);
            removeMessage("lastname");
        }else{
           crearSpan("lastname" , "Escriba su apellido correctamente.");
            removeMessage("lastname");
        }  
    }
    //validacion del correo
    if (!valiCorreo.test(correo)){
        crearSpan("input-email" , "Verefique su correo.") ;
    }else{
       removeMessage("input-email");
    }
    //validacion de la contraseña
    if (contra==="password" || contra==="123456"||contra==="098754"){
        crearSpan("input-password" , "Su contraseña no es valido.");
    }else if (contra.length<=6){
        crearSpan("input-password" , "Su contraseña debe tener al menos 6 caracteres.");
       
    }else{
       removeMessage("input-password");
    } 
    // validacion de los elecion  tipo de bicicleta
    var selec= document.getElementById("elejir").value;
    if (selec==0) {
       crearSpan("elejir" , "Debe elejir una opcion.")
    } else {
       removeMessage("elejir");
    } 
}