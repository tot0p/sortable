import {allTableData} from "./get-data.js";

let currentPage;
let nbPage = 0 ;
let nbHeroAff ;

export const initpagination = () => {
    console.log(allTableData.length)
    currentPage = document.getElementById("val")
    document.getElementById("left").addEventListener("click",()=>{
        console.log(allTableData.length)
        if (nbPage >0){
            nbPage--
            currentPage.textContent = nbPage.toString()
            Pagination()
        }
    })
    document.getElementById("right").addEventListener("click",()=>{
        if (nbPage <(Math.ceil(allTableData.filter(x => x.dataset.toDisplay === "true").length/nbHeroAff)-1)){
            nbPage++
            currentPage.textContent = nbPage.toString()
            Pagination()
        }
    })
    const selectnb = document.getElementById("nb-pages")
    selectnb.addEventListener("change",()=>{
        nbHeroAff = selectnb.value
        if (nbHeroAff === "all") {nbHeroAff=allTableData.length}else{nbHeroAff = parseInt(nbHeroAff)}
        nbPage = 0
        currentPage.textContent = nbPage.toString()
        Pagination()
    })
}


export const PaginationResearch = () => {
    nbPage = 0
    currentPage.textContent = nbPage.toString()
    Pagination()
}

export const Pagination = ()=>{
    nbHeroAff = document.getElementById("nb-pages").value
    if (nbHeroAff === "all") {nbHeroAff=allTableData.length}else{nbHeroAff = parseInt(nbHeroAff)}
    let count = 0
    for(let i of allTableData){
        if (i.dataset.toDisplay === "false"){
            i.style.display = "none";
        }else{
            if (nbPage*nbHeroAff<=count&& count<nbPage*nbHeroAff+nbHeroAff){
                i.style.display = ""
            }else{
                i.style.display = "none";
            }
            count++
        }
    }
}

