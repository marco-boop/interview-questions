//insert
//replace
//delete

const str1 = "r";
const str2 = "t";
let minCount = 0;
let currentCount = 0;

function convertCount(str1, str2) {
    //end condition
    if (str1 == str2) {
        return minCount;
        console.log("End: strings are the same: ", str1, str2);
    };

    if (str1 !== undefined && str2 == undefined) {
        console.log("delete");
        count += 1;
    };
    if (str1 == undefined && str2 !== undefined) {
        console.log("insert");
        count += 1;
    };
    if (str1[str1.length - 1] !== undefined && str2[str2.length - 1] !== undefined && str1[str1.length - 1] !== str2[str2.length - 1]) {
        console.log("replace");
        count += 1;
    };
    if (str1[0] == str2[0]) {
        console.log("move on to next char");
        convertCount
    };



}

answer = convertCount(str1, str2);
console.log(count);