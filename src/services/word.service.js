const WordRepository = require('../repositories/word.repo');
const { encrypt } = require('../utils/encryption');
const StringHelper = require('../utils/str');

const getWordsWithLetters = async () => {
    const result = await WordRepository.getWordsWithLetters();
    let id = 1;

    result.forEach(res => {
        res.id = id;
        res.letter = StringHelper.capitalizeFirstLetter(res.letter);
        res.answer = StringHelper.capitalizeFirstLetter(res.answer);
        res.question = StringHelper.capitalizeFirstLetter(res.question);
        id++;

        delete res.startswith;
        delete res.rn;
        
    });
    return encrypt(JSON.stringify(result));
}


module.exports = {
    getWordsWithLetters
}