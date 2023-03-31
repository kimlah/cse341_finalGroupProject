function firstName(firstName) {
    const validLength = firstName.length >= 3
    let hasLetter = false
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    for (const letter of alphabet) {
        if (firstName.toLowerCase().includes(letter)) {
            hasLetter = true
        }
    }

    const validFirstName = hasLetter && validLength
    return validFirstName
  }
  
  module.exports = firstName;
  ;