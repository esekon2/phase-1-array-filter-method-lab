// Code your solution here
// From the test we need to define findMatching function
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // From the test we need to define fuzzyMatch function
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // From the test we need to definematchName function
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  