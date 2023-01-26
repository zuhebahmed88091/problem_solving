function chunk (arr, size) {
    const chunked = [];
    for(let elm of arr){
        const last = chunked[chunked.length - 1];
        if(last && last.length < size) {
            last.push(elm);
        }
        else {
            chunked.push([elm])
        }
    }
    console.log(chunked)
}

chunk([1, 2, 3, 4, 5], 3);

function chunkedArray(arr, size) {
    const chunked = [];
    let index = 0;
    while(index < arr.length) {
        const slicedArray = arr.slice(index, index + size);
        chunked.push(slicedArray);
        index = index + size;
    }
    return chunked;
}

console.log(chunkedArray([1,2,3,4,5], 2))