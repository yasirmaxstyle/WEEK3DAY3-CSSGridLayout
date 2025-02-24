import { fetchDataAsync } from "./fetchData.js";
import { getDataUser } from "./getDataUser.js";
import { processData } from "./processData.js";
import { getDataFromServer } from "./processData.js";
import { isPalindrom } from "./isPalindrom.js";
import { reverseWords } from "./reverseWords.js";
import { divideAndSort } from "./divideAndSort.js";

function testAllFeatures() {
    fetchDataAsync(true);
    getDataFromServer(true, processData);
    getDataUser();
    console.log(isPalindrom('malam'));
    console.log(reverseWords('Saya belajar Javascript'));
    console.log(divideAndSort(5956560159466056));
}

export {
    fetchDataAsync,
    getDataUser,
    processData,
    getDataFromServer,
    isPalindrom,
    reverseWords,
    divideAndSort,
    testAllFeatures,
}
