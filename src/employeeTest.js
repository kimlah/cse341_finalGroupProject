function lastName(lastName) {
    const validLength = lastName.length >= 3
    let hasLetter = false
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    for (const letter of alphabet) {
        if (lastName.toLowerCase().includes(letter)) {
            hasLetter = true
        }
    }

    const validLastName = hasLetter && validLength
    return validLastName
  }
  
  module.exports = lastName;
  ;