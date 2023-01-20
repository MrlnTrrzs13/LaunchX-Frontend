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
            pokeImage(pokeImg);
            pokeType(poketype);
            pokeAbi(pokeabi);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeType = (typ) => {
    const poketipo = document.getElementById("pokedataT");
    const typename = typ.map((item) => item.type.name);
    poketipo.innerHTML = typename;
}

const pokeAbi = (abilities) => {
    const pokeabilities = document.getElementById("pokedata");
    const abilitiesname = abilities.map((item) => item.ability.name);
    pokeabilities.innerHTML = abilitiesname;
}
