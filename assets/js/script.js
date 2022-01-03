//Buscador
document.getElementById("ctn-total").addEventListener("click", ocultar_buscador);
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

barra_search = document.getElementById("criterio_buscar");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

function ocultar_buscador(){
    box_search.style.display = "none";
}

function buscador_interno(){
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");
    
    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;
        
        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }
        }else{
            li[i].style.display = "none";
        }
    }
}

//Filtros

