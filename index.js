function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumber = {};

  for (const number of array) {
    const complement = target - number;
    if (complement in seenNumber) return true;
    seenNumber[number] = true;
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  quadratic
*/

/* 
  Add your pseudocode here
      create an object to keep track of numberss we've already seen
      iterate through eaxh number in the array
      for the current number, identify a complement that adds to the target (complement = target - number)
      check if any on our object is the complement
      if so return true
      otherwise aadd that number to the  object
      if i reach the end of the array return false
*/

/*
  Add written explanation of your solution here
      the code iterates through eah number looking for a compliment which sums to the target number
      if the numbers sum up to the target return true 
      else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
