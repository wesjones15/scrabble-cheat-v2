class Tile {
    tripleWord; doubleWord; tripleLetter; doubleLetter; //booleans
    // existingLetter; // (string)
    constructor(
        tripleWord,
        doubleWord,
        tripleLetter,
        doubleLetter
    ) {
        this.tripleWord = tripleWord;
        this.doubleWord = doubleWord;
        this.tripleLetter = tripleLetter;
        this.doubleLetter = doubleLetter;
    }

    constructor() {
        this.tripleWord = false;
        this.doubleWord = false;
        this.tripleLetter = false;
        this.doubleLetter = false;
    }
}