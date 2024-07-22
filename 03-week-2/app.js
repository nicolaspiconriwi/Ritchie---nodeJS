const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Inicialización y Configuración
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});