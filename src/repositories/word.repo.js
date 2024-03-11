const dbRepo = require('../models')
const Word = dbRepo['wq'].word

const WordRepository = {

    getWordsWithLetters: async () => {
        const query = `
            WITH Letters AS (
                SELECT DISTINCT startswith AS letter
                FROM words
            )
            SELECT l.letter, w.*
            FROM Letters l
            LEFT JOIN (
                SELECT id, word as answer, definition as question, startswith, type,
                    ROW_NUMBER() OVER (PARTITION BY startswith ORDER BY RANDOM()) AS rn
                FROM words
            ) w ON l.letter = w.startswith AND w.rn = 1;
        `;
        try {
            const result = await Word.sequelize.query(query, { type: Word.sequelize.QueryTypes.SELECT });
            for (let i = 0; i < result.length; i++) {
                if(result[i].question.length > 125){
                    while (result[i].question.length > 125) {
                        result[i] = await WordRepository.getWordByStartsWith(result[i].startswith)
                    }
                }
            }
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to get words with letters');
        }
    },

    getWordByStartsWith: async (startsWith) => {
        const query = `
            SELECT id, word as answer, definition as question, startswith as letter, type
            FROM words
            WHERE startswith = :startsWith
            ORDER BY RANDOM()
            LIMIT 1;
        `;
        try {
            const result = await Word.sequelize.query(query, { 
                type: Word.sequelize.QueryTypes.SELECT,
                replacements: { startsWith }
            });
            return result[0];
        } catch (error) {
            console.log(error);
            throw new Error('Failed to get word by startsWith');
        }
    }
}

module.exports = WordRepository;