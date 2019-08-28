import getPointValueOfWord from './getPointValueOfWord'

const getTopThreeBestWords = (words) => {
    const words_with_scores = words.map((word, i) => ([ word, getPointValueOfWord(word) ]));
    let sortedArray = words_with_scores.sort((a,b) => b[1]-a[1]).slice(0,3);
    return sortedArray;
}

export { getTopThreeBestWords as default }