import {allTableData,queryApiId,hero,getPowerStats} from "./get-data.js";

let acc ;
let more;

export const initmore = () => {
    acc = document.getElementById("acc");
    more = document.getElementById("more");
    for (let i of allTableData){
        i.addEventListener("click",(event) => {
            acc.style.display = "none";
            more.style.display = "";
            let temp  = event.target
            while(temp.tagName!="TD") temp =  temp.parentNode
            moreDraw( temp.parentNode)
        });
    }
    let goback = document.getElementById("back").addEventListener("click",(event)=>{
        acc.style.display = "";
        more.style.display = "none";
    })

}



const moreDraw = (target) => {
    queryApiId(target.id,(hero)=>{
        let all = document.querySelectorAll("#more div")
        all[0].textContent = hero.name
        all[1].innerHTML=""
        all[1].append(getPowerStats(hero.powerstats))
        all[3].textContent = hero.appearance.gender
        all[4].textContent = hero.appearance.race
        all[5].textContent = hero.appearance.height[1]
        all[6].textContent = hero.appearance.weight[1]
        all[7].textContent = hero.appearance.eyeColor
        all[8].textContent = hero.appearance.hairColor
        all[10].textContent= hero.biography.fullName
        all[11].textContent = hero.biography.alterEgos
        all[12].textContent = hero.biography.aliases.toString()
        all[13].textContent = hero.biography.placeOfBirth
        all[14].textContent = hero.biography.firstAppearance
        all[15].textContent = hero.biography.publisher
        all[16].textContent = hero.biography.alignment
        all[17].textContent = hero.work.occupation + "\n" + hero.work.base
        all[18].textContent = hero.connections.groupAffiliation + "\n" + hero.connections.relatives
        let imageData = document.createElement("img");
        imageData.src = hero.images.sm;
        all[19].innerHTML=""
        all[19].append(imageData)
    })
}