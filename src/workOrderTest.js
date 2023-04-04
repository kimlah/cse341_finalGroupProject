function workOrderName(workOrderName) {
    const validLength = workOrderName.length >= 3
    let hasLetter = false
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    for (const letter of alphabet) {
        if (workOrderName.toLowerCase().includes(letter)) {
            hasLetter = true
        }
    }

    const validworkOrderName = hasLetter && validLength
    return validworkOrderName
  }
  
  module.exports = workOrderName;