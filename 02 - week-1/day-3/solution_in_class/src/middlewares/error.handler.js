const errorHandler = (err, req, res) => {
    console.error(err.stack);
    res.status(500).json({"error": err.message, "message": "Ocurrio un error en el servidor"})
};

export default errorHandler