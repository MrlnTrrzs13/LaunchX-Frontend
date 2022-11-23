/* elementos de DOM*/

window.onclick = function() {
    //Crea una serie de elementos por cada tag encontrado
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("¿Quiéres ser mi chavita?");

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
};