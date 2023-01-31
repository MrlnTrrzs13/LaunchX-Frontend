const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./Pokedex/triste.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let poketype = data.types;
            let pokeabi = data.abilities;
            let pokename = data.name;
            let pokeids = data.id;
            pokeImage(pokeImg);
            pokeAbi(pokeabi, poketype);
            pokeNombre(pokename);
            pokeId(pokeids);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
    pokePhoto.style.width = '220px';
    pokePhoto.style.height = '220px';
}

const pokeId = (identificador) => {
    const pkid = document.getElementById("pokeid");
    pkid.innerHTML = `ID: ${identificador}`;
    
}

const pokeAbi = (abilities,typ) => {
    const resultado =document.getElementById("pokedata");
    //const pokeabilities = document.getElementById("pokedata");
    //const poketipo = document.getElementById("pokedata");
    const abilitiesname = abilities.map((item) => item.ability.name);
    const typename = typ.map((item) => item.type.name);
    resultado.innerHTML = `Abilidad: ${abilitiesname}
                           Tipo: ${typename}`;
    //resultado.innerHTML = `Tipo: ${typename}`;
}

const pokeNombre = (nombre) => {
    const pknombre = document.getElementById("pokeNomb");
    pknombre.innerHTML = `Nombre: ${nombre}`;
    pknombre.style.fontSize = '14px';
}
