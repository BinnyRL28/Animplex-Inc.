/*let infoPersonal = creadoras.Integrantes[0];
    console.log(infoPersonal); */

/* const tabla = document.querySelector('#lista-creadoras tbody');

function cargarCreadoras(){
    fetch('perfiles.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(creadoras => {
            creadoras.forEach(creadora => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${creadora.id}</td>
                    <td>${creadora.name}</td>
                    <td>${creadora.email}</td>
                    <td>${creadora.company.name}</td>
                `;
                tabla.appendChild(row);                
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarCreadoras(); */

const tabal=document.querySelector('#lista-creadoras tbody');

function cargarInformacion(){
    fetch ('perfiles.json')
    .then(datos => datos.json())//Indicamos el formato en el que se desea obtener la información
    .then(perfiles =>{
        perfiles.forEach(perfiles => {
            const row = document.createElement('tr');
            row.innerHTML +=`
            <td>${perfiles.id}</td>
            <td>${perfiles.Nombres}</td>
            <td><p>${perfiles.Correo}</p></td>
            <td>${perfiles.Favoritos}</td>
            `;
            tabal.appendChild(row);
        });
    })//Aquí mostramos la información
}

cargarInformacion();

