const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const {
  logErrors,
  errorHandler,
  wrapErrors
} = require('./utils/middlewares/errorHandler');

const notFoundHandler = require('./utils/middlewares/notFoundHandler');

// body parser - middleware
app.use(express.json());

// Routes
moviesApi(app);

// Para capturar el error 404 se debe agregar el middleware apenas terminen las rutas
app.use(notFoundHandler);

// Middlewares manejadores de errores siempre al final de las rutas
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
