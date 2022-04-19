import 'dotenv/config';
import 'reflect-metadata';
import App from './App';

const port = process.env.PORT;
const app = new App().express;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
