import { Router } from "express";
import {
  signinHandler,
  signupHandler,
} from "../controllers/auth.controller.js";
import {
  checkExistingUser,
} from "../middlewares/verifySignup.js";

const router = Router();

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/signup", [checkExistingUser], signupHandler);

router.post("/signin", signinHandler);

export default router;