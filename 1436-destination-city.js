const paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
const paths2 = [["B", "C"], ["D", "B"], ["C", "A"]]
const paths3 = [["A", "Z"]]

let pathedcities = [];

for (let i = 0; i < paths.length; i++) {
    pathedcities.push(paths[i][0])
}

for (j = 0; j < paths.length; j++) {
    if (pathedcities.includes(paths[j][1])) {

    }
    else {
        console.log(paths[j][1]);
    }
}

//Below works but trying something new

// let allcities = [];
// let pathedcities = [];

// for (let i = 0; i < paths.length; i++) {
//     // console.log(paths[i][1]);
//     // Is paths[i][1] == to paths[j][0] for any other path
//     allcities.push(paths[i][1]);
//     for (let j = 0; j < paths.length; j++) {
//         // console.log(paths[i][1], paths[j][0]);
//         if (paths[i][1] !== paths[j][0]) {
//             // console.log("No path");
//         }
//         else {
//             // console.log("City match:", paths[i][1], paths[j][0]);
//             pathedcities.push(paths[j][0]);
//         }
//     }
// }

// console.log("This is all cities: ", allcities);
// console.log("This is cities with a direct path: ", pathedcities);

// for (let k = 0; k < allcities.length; k++) {
//     if (pathedcities.includes(allcities[k])) {
//         console.log(allcities[k], " is in pathed cities.");
//     }
//     else {
//         console.log(allcities[k], " is not pathed.");
//         return allcities[k];
//     }
// }