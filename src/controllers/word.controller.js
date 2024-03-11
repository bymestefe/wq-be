const { getWordsWithLetters } = require('../services/word.service');
const respHelper = require('../utils/responseHelper');

const getWords = async (req, res) => {
    try {
        const result = await getWordsWithLetters();
        return respHelper.success(res, result);
    } catch (error) {
        return respHelper.error(res, error);
    }
}

module.exports = {
    getWords,
}