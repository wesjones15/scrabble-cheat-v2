export default (letter) => {
    letter = letter.toUpperCase()
    const isLetter = letter.match(/[A-Z]/)
    const isOneChar = (letter.length <= 1)
    if (isLetter && isOneChar) return true
    else return false
}
