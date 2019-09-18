const convertLetterToPointValue = (letter) => {
    const tileScoreGroups = [ 
        [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'S', 'T', 'R'], 1],
        [['D', 'G'], 2],
        [['B', 'C', 'M', 'P'], 3],
        [['F', 'H', 'V', 'W', 'Y'], 4],
        [['K'], 5],
        [['J', 'X'], 8],
        [['Q', 'Z'], 10]
    ]
    let value = 0
    // tileScoreGroups.forEach(letters, points => {
    //     if (letters.includes(letter)) {
    //         value = points
    //     }
    // })
    tileScoreGroups.forEach(tileGroup => {
        if (tileGroup[0].includes(letter)) {
            value = tileGroup[1]
        }
    })
    return value
}

export { convertLetterToPointValue as default }