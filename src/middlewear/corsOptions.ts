// /middlewares/corsOptions.ts
import cors from 'cors';

export const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
