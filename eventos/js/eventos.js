let elemento=document.querySelector("#elemento");
let agregar=document.querySelector("#agregar");
let lista=document.querySelector("#listadinamica");

elemento.focus();

agregar.addEventListener("click",()=>{
    if(elemento.value.trim()!=""){
    let nuevoelemento=document.createElement("li");
    nuevoelemento.innerHTML=elemento.value;
    lista.appendChild(nuevoelemento);
    elemento.value="";
    elemento.focus();
}
})

elemento.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        agregar.click();
    }
})

//Arrastrar y soltar
let arrastra=document.querySelector("#arrastra");
let zonasoltar=document.querySelectorAll("#zonasoltar");

arrastra.addEventListener("dragstart",function(e){
    this.style.border="2px solid red";
})

zonasoltar.addEventListener("dragover",function(e){
    event.preventDefault();
})

zonasoltar.addEventListener("drop",function(e){
    arrastra.style.border="none";
    arrastra.style.display="block";
    this.append(arrastra);
})