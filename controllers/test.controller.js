const exampleMethod = async (req, res) => {
    try {
        console.log(req.body);

        return res.status(200).json({
            status: 'success',
            data: 1,
            message: 'Successfully processed the request',
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

module.exports = {
    exampleMethod,
};