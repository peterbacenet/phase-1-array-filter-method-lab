// Code your solution here
function findMatching(names, string) {
    let correctName = names.filter(anything => anything.toUpperCase() == string.toUpperCase())
    return correctName;
}
function fuzzyMatch(drivers, string) {
    let correctLetters = drivers.filter(driver => driver.slice(0,string.length) == string)
    return correctLetters
}

function matchName(array,string) {
    let property = array.filter(driver => driver.name === string)
    return property
}


// findMatching()
//       1) returns all drivers that match the passed in name
//       2) returns matching drivers if case does not match but letters do
//       3) returns an empty array if there is no match
