function min(arr) {
    let min_num = arr[0];

    for(let num of arr) {
        if(num < min_num) {
            min_num = num;
        }
    }
    return min_num;
}

console.log(min([5,10,15,-3,0]));

function max(arr) {
    let max_num = arr[0];

    for(let num of arr) {
        if(num > max_num) {
            max_num = num;
        }
    }
    return max_num;
}
console.log(max([5,10,15,-3,0]));

function minMaxDifference(arr) {
    let max_num = arr[0];
    let min_num = arr[0];

    for(let num of arr) {
        if(num > max_num) {
            max_num = num;
        }
    }
    for(let num of arr) {
        if(num < min_num) {
            min_num = num;
        }
    }
    return max_num - min_num;
}
console.log(minMaxDifference([10,5,69,32,3]));