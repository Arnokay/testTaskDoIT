import dotenv from 'dotenv'
dotenv.config();

let {
  MONGO_URL,
  MONGO_URL_TEST,
  JWT_SECRET
} = process.env;

export default {
  mongoUrl: MONGO_URL || "",
  mongoUrlTest: MONGO_URL_TEST || "",
  jwtSecret: JWT_SECRET,
  jwtDuration: "365 days"
};