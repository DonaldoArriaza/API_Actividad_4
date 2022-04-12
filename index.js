let boton_solicitud = document.getElementById('consultar')
let input_tipo = document.getElementById('tipo')
let input_filtro = document.getElementById('filtro')
let imagen_respuesta = document.getElementById('respuesta')

boton_solicitud.addEventListener('click', realizarSolicitud)

function realizarSolicitud() {
    let tipo_vacio = input_tipo.value
    let filtro_vacio = input_filtro.value
    if (tipo_vacio == '' && filtro_vacio == '') {
        fetch('https://cataas.com/cat?json=true')
            .then(response => response.json())
            .then(gato => {
                imagen_respuesta.setAttribute('src', `https://cataas.com/${gato.url}`)
                console.log(gato)
            })
    } else if (tipo_vacio == '' && filtro_vacio != '') {
        fetch(`https://cataas.com/cat?filter=${filtro_vacio}&json=true`)
            .then(response => response.json())
            .then(gato => {
                imagen_respuesta.setAttribute('src', `https://cataas.com/${gato.url}`)
                console.log(gato)
            })
    } else if (tipo_vacio != '' && filtro_vacio == '') {
        fetch(`https://cataas.com/cat?type=${tipo_vacio}&json=true`)
            .then(response => response.json())
            .then(gato => {
                imagen_respuesta.setAttribute('src', `https://cataas.com/${gato.url}`)
                console.log(gato)
            })
    } else {
        fetch(`https://cataas.com/cat?type=${tipo_vacio}&filter=${filtro_vacio}&json=true`)
            .then(response => response.json())
            .then(gato => {
                imagen_respuesta.setAttribute('src', `https://cataas.com/${gato.url}`)
                console.log(gato)
            })
    }

}