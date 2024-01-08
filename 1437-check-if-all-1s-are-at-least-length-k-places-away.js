const nums = [1, 0, 0, 0, 1, 0, 0, 1];
const k = 2;

function distance(nums, k, i = 0) {

    if (i >= nums.length - 1) return true;

    for (let j = 1; j < nums.length; j++) {
        if (i == j) {
            j = j + 1;
        }
        else {
            if (nums[i] == 1 && nums[j] == 1) {
                if (j - i < k) {
                    return false;
                }
                if (j - i >= k) {
                    console.log("Distance is ", j - i - 1);
                    i = i + 1;
                }
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