
 function api() {
    let valor = document.getElementById("valor").value;
    let valor2 = document.getElementById("valor2").value;
    fetch(`https://rickandmortyapi.com/api/character/${valor},${valor2}`)
    .then( res => res.json())
    .then((data) => {
    console.log(data) 
    document.getElementById("info").innerHTML= `
    <h2>Nombre: ${data[0].name}</h2>
    <h2>Genero: ${data[0].gender}</h2>
    <img src="${data[0].image}" alt="">
    `;
    document.getElementById("info2").innerHTML= `
    <h2>Nombre: ${data[1].name}</h2>
    <h2>Genero: ${data[1].gender}</h2>
    <img src="${data[1].image}" alt="">
    `;
    if (data[0].gender == data[1].gender) {
        document.getElementById("tick").innerHTML= `
        <h2>NO MATCH</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-x" width="64" height="64" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M7 4l10 16" />
          <path d="M17 4l-10 16" />
        </svg>
    `}
    else 
        document.getElementById("tick").innerHTML=`
        <h2>MATCH</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="64" height="64" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M5 12l5 5l10 -10" />
        </svg>
    `
});
}

//tp2 dos buscadores y que aparezcan las dos fotos, si el genero es igual tildar o denegar


