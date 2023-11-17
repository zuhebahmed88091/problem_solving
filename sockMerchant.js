function sockMerchant(n, ar) {
    // Array validation
    if (!ar || ar.length !== n) {
      return 0;
    }
  
    // Counting pairs
    let pairs = 0;
    let hashMap = {};
  
    for (let sock of ar) {
      if (sock in hashMap) {
        hashMap[sock] = hashMap[sock] + 1;
        console.log(hashMap)
        if (hashMap[sock] === 2) {
          pairs++;
          hashMap[sock] = 0;
        }
      } 
      else {
        hashMap[sock] = 1;
        console.log(hashMap)
      }
    }
    return pairs;
  }

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));