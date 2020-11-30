/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cors from "cors";

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

app.listen(PORT, () => {
  console.log(`App currently listening on http://localhost:${PORT}`);
});
