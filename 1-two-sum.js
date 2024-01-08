const nums = [2, 7, 11, 15];
const target = 9

for (let i = 0; i < nums.length; i++) {
    // console.log("Position: ", i, "Value: ", nums[i]);
    for (let j = 0; j < nums.length; j++) {
        // console.log(nums[i] + nums[j]);
        if (i !== j) {
            if (nums[i] + nums[j] == target) {
                console.log(i, j);
                return [i, j];
            }
        }
    }
}