const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1,];
const k = 0;

function distance(nums, k, i = 0) {

    if (k === 0) return true;
    if (i >= nums.length - 1) return true;


    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] == 1 && nums[j] == 1) {
            console.log("j minus i is ", j - i);
            if (j - i - 1 < k) {
                console.log(j - i - 1, " is less than ", k);
                return false;
            }
        }
    }
    if (i < nums.length - 1) {
        return distance(nums, k, i + 1);
    }
    return true;
};

const answer = distance(nums, k);
console.log(answer);