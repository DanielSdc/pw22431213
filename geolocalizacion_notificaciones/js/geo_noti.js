let info = document.querySelector("#info")
function obtenerubicacion(){
    navigator.geolocation.getCurrentPosition(function(posiscion){
        const lat = posicion.coords.latitude;
        const lon = posicion.coords.longitude;
        info.textContent = `Latitud: ${lat} - Longitud: ${lon}`;
        notificar();
    },function(error){
        console.log(error.message);
    });
}

let boton = document.querySelector("#ubicacion");
boton.addEventListener("click", ()=>{
    obtenerubicacion();
});

//Notificacion
const notificar = () => {
    Notification.requestPermission()
    .then(permission=>{
        if(permission === "granted"){
            new Notification("Coordenadas obtenidas")
        }
    })
}