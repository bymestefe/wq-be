const WordRepository = require('../repositories/word.repo');

const getWordsWithLetters = async () => {
    const result = await WordRepository.getWordsWithLetters();
    return result;
}

module.exports = {
    getWordsWithLetters
}