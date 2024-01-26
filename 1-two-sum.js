const nums = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10


// for (let i = 0; i < nums.length; i++) {
//     // console.log("Position: ", i, "Value: ", nums[i]);
//     for (let j = 0; j < nums.length; j++) {
//         // console.log(nums[i] + nums[j]);
//         if (i !== j) {
//             if (nums[i] + nums[j] == target) {
//                 console.log(i, j);
//                 return [i, j];
//             }
//         }
//     }
// }

// function twoSums(nums, target, i = 0) {
//     if (i >= nums.length) return;

//     for (let j = 0; j < nums.length; j++) {
//         if (i !== j && nums[i] + nums[j] === target) {
//             return [nums[i], nums[j]];
//         }
//     }

//     return twoSums(nums, target, i + 1);
// }

// function twoSums(nums, target, i = 0) {
//     if (nums.length < 2 || i >= nums.length) {
//         return [];
//     }
//     let difference = target - nums[i];
//     for (j = 1; j < nums.length; j++) {
//         if (i !== j & difference == nums[j]) {
//             return [nums[i], nums[j]];
//         }
//     }
//     return twoSums(nums, target, i + 1);
// }

function twoSums(nums, target) {

    if (nums.length < 2) {
        return [];
    }
    const hashTable = {};
    for (i = 0; i < nums.length; i++) {
        hashTable[target - nums[i]] = i;
    }

    for (j = 0; j < nums.length; j++) {
        if (hashTable[nums[j]] !== undefined & hashTable[nums[j]] !== j) {
            console.log("Currently evaluating the number ", nums[j], " which is in position ", j);
            console.log("hashTable[nums[j]] is", hashTable[nums[j]]);
            console.log("The counterpart number is", nums[hashTable[nums[j]]]);
            return [nums[j], nums[hashTable[nums[j]]]];
        }
    }
}


const answer = twoSums(nums, target);
console.log("The answer is ", answer);


// function twoNumberSum(array, targetSum) {

//     if (array.length < 2) {
//         return [];
//     }
//     const hashTable = {};
//     for (i = 0; i < array.length; i++) {
//         hashTable[targetSum - array[i]] = i;
//     }

//     for (j = 0; j < array.length; j++) {
//         if (hashTable[array[j]] !== undefined & hashTable[array[j]] !== j) {
//             return [array[j], array[hashTable[array[j]]]];
//         }

//     }
// }
