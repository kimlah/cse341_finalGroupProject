function equipmentName(equipmentName) {
    const validLength = equipmentName.length >= 3
    let hasLetter = false
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    for (const letter of alphabet) {
        if (equipmentName.toLowerCase().includes(letter)) {
            hasLetter = true
        }
    }

    const validEquipmentName = hasLetter && validLength
    return validEquipmentName
  }
  
  module.exports = equipmentName;