import express, { Express } from 'express';
import { router } from './routes';
import './infra/database/postgres';

class App {
  public express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares():void {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  routes():void {
    this.express.use('/api', router);
  }
}

export default App;
