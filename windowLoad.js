import {searchBarInit} from "./search-bar.js";
import {display,queryApi} from "./get-data.js";
import {InitSort} from "./sort.js"
import {initpagination} from "./pagination.js"


window.onload = () => {
    queryApi(display);
    searchBarInit();
    InitSort();
    initpagination();
}