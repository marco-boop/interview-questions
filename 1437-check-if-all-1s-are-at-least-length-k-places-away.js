const nums = [1, 0, 0, 0, 1, 0, 0, 1];
const k = 5;

function distance(nums, k, valid = true) {

    let onesOnly = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            onesOnly.push(i);
        }
    };

    for (let j = 1; j < onesOnly.length; j++) {
        if (((onesOnly[j] - onesOnly[j - 1]) - 1) >= k) {
            console.log("Distance larger or equal: ", (onesOnly[j] - onesOnly[j - 1]) - 1);
        }
        else {
            console.log("Valid is now false")
            valid = false;
        }
    };

    return valid;
};
const answer = distance(nums, k);
console.log(answer);

// if (k === 0) return true;
// if (i >= nums.length - 1) return true;

// for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] == 1 && nums[j] == 1) {
//         console.log("j minus i is ", j - i);
//         if (j - i - 1 < k) {
//             console.log(j - i - 1, " is less than ", k);
//             return false;
//         }
//     }
// }
// if (i < nums.length - 1) {
//     return distance(nums, k, i + 1);
// }
// return true;



// function distance(nums, k, i = 0, valid = true) {

//     if (k === 0) return true;
//     if (i >= nums.length - 1) return true;

//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] == 1 && nums[j] == 1) {
//             console.log("j minus i is ", j - i);
//             if (j - i - 1 < k) {
//                 console.log(j - i - 1, " is less than ", k);
//                 return false;
//             }
//         }
//     }
//     if (i < nums.length - 1) {
//         return distance(nums, k, i + 1);
//     }
//     return true;
// };