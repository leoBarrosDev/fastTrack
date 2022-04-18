import { createConnection } from 'typeorm';

class Postgres {
  constructor() {
    this.databaseConnection();
  }

  async databaseConnection(): Promise <void> {
    await createConnection().then(() => {
      // console.log('Conectado com sucesso');
    });
  }
}

export default new Postgres();
