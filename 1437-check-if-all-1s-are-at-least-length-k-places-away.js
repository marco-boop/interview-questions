const nums = [1, 0, 0, 0, 1, 0, 0, 1];
const k = 2;

function distance(nums, k, valid = true) {

    let onesOnly = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            onesOnly.push(i);
        }
    };

    for (let j = 1; j < onesOnly.length; j++) {
        if (((onesOnly[j] - onesOnly[j - 1]) - 1) < k) {
            valid = false;
        }
    };

    return valid;
};
const answer = distance(nums, k);
console.log(answer);