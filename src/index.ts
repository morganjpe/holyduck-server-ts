/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";

// middleware
import auth from "./middleware/auth";

// routes
import publicRoutes from "./routes/public";
import privateRoutes from "./routes/private";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT = parseInt(process.env.PORT as string, 10);
const app = express();

/**
 *  App Configuration
 */
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({ holyDuck: "connected" });
});

publicRoutes(app);

// add auth middleware
app.use(auth);

privateRoutes(app);

const server = app.listen(PORT, () => {
  console.log(`App currently listening on http://localhost:${PORT}`);
});

/**
 * Webpack HMR Activation
 */

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
