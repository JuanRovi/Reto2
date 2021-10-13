function traerInformacion(){
    $.ajax({
        url:"https://gbd52780c410100-db202109251326.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }

    });
}

function traerInformacionR(){
    $.ajax({
        url:"https://gbd52780c410100-db202109251326.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }

    });
}

function traerInformacionM(){
    $.ajax({
        url:"https://gbd52780c410100-db202109251326.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }

    });
}

function pintarRespuesta(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button  onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function pintarRespuestaroom(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].room+"</td>";
        myTable+="<td>"+items[i].stars+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
        myTable+="<td> <button  onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function pintarRespuestamessagetext(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button  onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion() {

    let myData = {
    id: $("#id").val(),
    name: $("#name").val(),
    email: $("#email").val(),
    age: $("#age").val(),
    };
    let dataToSend = JSON.stringify(myData);

    $.ajax({
    url: "https://gbd52780c410100-db202109251326.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: "POST",
    data: dataToSend,
    contentType:"application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
        // limpiamos los campos 
        $("#resultado").empty();
        $("#id").val(""),
        $("#name").val(""),
        $("#email").val(""),
        $("#age").val(""),
          //actualizamos la tabla 
        traerInformacion();
        //mostramos que se hizo efectivo 
        alert('SE HA GUARDADO.');
    }
    });
}


function guardarInformacionR() {

    let myData = {
    id: $("#Rid").val(),
    room: $("#Rroom").val(),
    stars: $("#Rstars").val(),
    category_id: $("#Rcategory_id").val(),
    description: $("#Rdescription").val(),

    };
    let dataToSend = JSON.stringify(myData);

    $.ajax({
    url: "https://gbd52780c410100-db202109251326.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
    type: "POST",
    data: dataToSend,
    contentType:"application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
        // limpiamos los campos 
        $("#Rresultado").empty();
        $("#Rid").val(""),
        $("#Rroom").val(""),
        $("#Rstars").val(""),
        $("#Rcategory_id").val(""),
        $("#Rdescription").val(""),
          //actualizamos la tabla 
        traerInformacion();
        //mostramos que se hizo efectivo 
        alert('SE HA GUARDADO.');
    }
    });
}



function guardarInformacionM() {

    let myData = {
    id: $("#Mid").val(),
    messagetext: $("#Mmessagetext").val(),
    };
    let dataToSend = JSON.stringify(myData);

    $.ajax({
    url: "https://gbd52780c410100-db202109251326.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: "POST",
    data: dataToSend,
    contentType:"application/JSON",
    datatype: "JSON",
    success: function (respuesta) {
        // limpiamos los campos 
        $("#resultado").empty();
        $("#Mid").val(""),
        $("#Mmessagetext").val(""),
          //actualizamos la tabla 
        traerInformacion();
        //mostramos que se hizo efectivo 
        alert('SE HA GUARDADO.');
    }
    });
}



function editarInformacion(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gbd52780c410100-db202109251326.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function editarInformacionR(){
    let myData={
        id:$("#Rid").val(),
        room:$("#Rroom").val(),
        stars:$("#Rstars").val(),
        category_id:$("#Rcategory_id").val(),
        description:$("#Rdescription").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gbd52780c410100-db202109251326.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#Rid").val("");
            $("#Rroom").val("");
            $("#Rstars").val("");
            $("#Rcategory_id").val("");
            $("#Rdescription").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function editarInformacionM(){
    let myData={
        id:$("#Mid").val(),
        messagetext:$("#Mmessagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gbd52780c410100-db202109251326.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#Mid").val("");
            $("#Mmessagetext").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}


function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gbd52780c410100-db202109251326.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}

function limpiarCampos(){
    $("#id").val("");
    $("#name").val("");
    $("#email").val("");
    $("#age").val("");
}