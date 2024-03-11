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
                SELECT id, word as answer, definition as question, startswith,
                    ROW_NUMBER() OVER (PARTITION BY startswith ORDER BY RANDOM()) AS rn
                FROM words
            ) w ON l.letter = w.startswith AND w.rn = 1;
        `;
        try {
            const result = await Word.sequelize.query(query, { type: Word.sequelize.QueryTypes.SELECT });
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to get words with letters');
        }
    }
}

module.exports = WordRepository;