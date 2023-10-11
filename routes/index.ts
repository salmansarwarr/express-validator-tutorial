import { Request, Response, Router } from "express";
import { resgisterSchema } from "../schema/register-schema";
import { validateRequestSchema } from "../middleware/validate-request-schema";

const rootRouter = Router();

rootRouter.post(
    "/register",
    resgisterSchema,
    validateRequestSchema,
    (req: Request, res: Response) => {
        res.sendStatus(201);
    }
);

export { rootRouter as router };
