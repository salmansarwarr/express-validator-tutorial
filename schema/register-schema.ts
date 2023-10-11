import { body } from "express-validator";

const schema = [
    body("email").isEmail().withMessage('must be a valid email'),
    body("firstName").exists({ checkFalsy: true }).withMessage('must be atleast 1 character'),
    body("password").isLength({ min: 5 }).withMessage('must be atleast 5 characters'),
];

export { schema as resgisterSchema };
