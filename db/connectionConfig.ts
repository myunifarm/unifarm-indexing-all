import dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";
import { Claim } from "./entity/Claim";
import { Cohort } from "./entity/Cohort";
import { RefferralClaim } from "./entity/RefferalClaim";
import { Stake } from "./entity/Stake";
import { Token } from "./entity/Token";
import { Unstake } from "./entity/Unstake";

// config
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// client options
type ClientOptions = ConnectionOptions;

export const clientOps: ClientOptions = {
  type: "postgres",
  host: String(process.env.DB_HOSTNAME),
  port: Number(process.env.PORT),
  username: String(process.env.DB_USERNAME),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_NAME),
  synchronize: true,
  logging: false,
  entities: [Cohort, Token, Stake, Unstake, Claim, RefferralClaim],
  logNotifications: true,
  name: "unifarm",
  extra: {
    connectionLimits: 5,
    keepConnectionAlive: true,
  },
};
