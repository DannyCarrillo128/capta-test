import express, { Application } from 'express';
import cors from 'cors';

import businessDaysRoutes from '../routes/businessDays';

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    businessDays: '/api/businessDays'
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(cors());
  }

  routes(): void {
    this.app.use(this.apiPaths.businessDays, businessDaysRoutes);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${ this.port }`);
    });
  }

}

export default Server;
