import "express-session";

declare module 'express-session' {
   interface SessionData {
      user: { [key: string]: any };
    }
}
export default 'express-session';

// import "express-session";
// declare global {
//     namespace Express {
//       interface Session {
//         user?: any
//       }
//     }
//   }