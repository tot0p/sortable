import {initmore} from "./more.js"
import {Pagination} from "./pagination.js"


export const getPowerStats = (powerstats) =>{
    let list = document.createElement("ul");
    let intelligence = document.createElement("li");
    intelligence.innerHTML = 'intelligence 🧠 : '+powerstats["intelligence"];
    let strength = document.createElement("li");
    strength.innerHTML = 'strength 💪 : '+powerstats["strength"];
    let speed = document.createElement("li");
    speed.innerHTML = 'speed 👟 : '+powerstats["speed"];
    let durability = document.createElement("li");
    durability.innerHTML = 'durability 🛡️ : '+powerstats["durability"];
    let power = document.createElement("li");
    power.innerHTML = 'power ⚡ : '+powerstats["power"];
    let combat = document.createElement("li");
    combat.innerHTML = 'combat ⚔️ : '+powerstats["combat"];
    list.append(intelligence,strength,speed,durability,power,combat);
    return list
}


export var allTableData = [];
function loadData(heroesTable) {
    if (allTableData.length !== heroesTable.length) {
        allTableData = [];
        let i = 0
        heroesTable.forEach(hero => {
            let row = document.createElement("tr");
            row.id = i;

            // image
            let imageData = document.createElement("img");
            imageData.src = hero.images.sm;
            let image = document.createElement("td");
            image.id = "image";
            image.append(imageData);

            // name
            let name = document.createElement("td");
            name.id = "name";
            name.innerHTML = hero.name;

            // full name
            let fullName = document.createElement("td");
            fullName.id = "full-name";
            fullName.innerHTML = hero.biography.fullName;

            // power stats
            let powerStats = document.createElement("td");
            powerStats.id = "power-stats";
            powerStats.append(getPowerStats(hero.powerstats));

            // race
            let race = document.createElement("td");
            race.id = "race";
            race.innerHTML = hero.appearance.race;

            // gender
            let gender = document.createElement("td");
            gender.id = "gender";
            gender.innerHTML = hero.appearance.gender;

            // height
            let height = document.createElement("td");
            height.id = "height";
            height.innerHTML = hero.appearance.height[1];

            // weight
            let weight = document.createElement("td");
            weight.id = "weight";
            weight.innerHTML = hero.appearance.weight[1];

            // place of birth
            let placeOfBirth = document.createElement("td");
            placeOfBirth.id = "place of birth";
            placeOfBirth.innerHTML = hero.biography.placeOfBirth;

            // alignment
            let alignment = document.createElement("td");
            alignment.id = "alignment";
            alignment.innerHTML = hero.biography.alignment;


            row.append(image, name, fullName, powerStats, race, gender, height, weight, placeOfBirth, alignment);
            row.dataset.toDisplay = true;
            allTableData.push(row);
            i++;
        });
    };
    initmore();
    Pagination();
    return allTableData;
}

export const display = (Data) => {
    let tbody = document.getElementById("superheroTableBody");
    loadData(Data).forEach(elem => {
        tbody.append(elem);
    });
}



export function queryApi(func) {
    fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json').then((response) => response.json()).then(func);
}

export let hero;

export const queryApiId = (id,func)=>{
    queryApi((data) => {
        hero = data[id]
        func(hero)
    });
}