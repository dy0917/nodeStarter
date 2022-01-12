//handle email or usename duplicates
import { Request, Response,NextFunction } from 'express';
const handleDuplicateKeyError = (err:any, res:Response) => {
   const field = Object.keys(err.keyValue);
   const code = 409;
   const error = `An account with that ${field} already exists.`;
   res.status(code).send({messages: error, fields: field});
}
//handle field formatting, empty fields, and mismatched passwords
const handleValidationError = (err:any,  res:Response) => {
   let errors = Object.values(err.errors).map((el:any) => el.message);
   let fields = Object.values(err.errors).map((el:any) => el.path);
   let code = 400;
   if(errors.length > 1) {
     const formattedErrors = errors.join('');
     res.status(code)
         .send({messages: formattedErrors, fields: fields});
     } else {
          res.status(code)
            .send({messages: errors, fields: fields});
     }
}
//error controller function
export default (err:any, req:Request, res:Response, next:NextFunction) => {
try {
    console.log('error',err);
    if(err.name === 'ValidationError') return err = handleValidationError(err, res);
    if(err.code && err.code == 11000) return err = handleDuplicateKeyError(err, res);
    } catch(err) {
        res
          .status(500)
          .send('An unknown error occurred.');
}
}