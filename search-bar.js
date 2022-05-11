import {allTableData} from "./get-data.js";
import {PaginationResearch} from "./pagination.js"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export const searchBarInit = () => {
    const search = document.querySelectorAll("#search")[0];
    const select = document.getElementById("search-select");
    search.value ="";

    search.addEventListener("keyup",(event) => {
        searchBar(event.target.value,select.value);
        PaginationResearch()
    });

    select.addEventListener("change",(event) => {
        searchBar(search.value,select.value);
        PaginationResearch()
    })

}


const searchBar = (s,id) => {
    for(let i of allTableData){
        for (let y of i.children){
            if (y.id ===id){
                i.dataset.toDisplay = y.textContent.toLowerCase().includes(s.toLowerCase());
            }
        }
    }
}