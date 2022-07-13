import "express-session";

declare module 'express-session' {
   interface SessionData {
      user: { [key: string]: any };
    }
}

declare global {
  namespace Express {
    interface Request {
      user: { [key: string]: any };
    }
  }
}

export default 'express-session';

