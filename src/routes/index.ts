import express from "express";
import { usersRoute }  from "./users.routes";

const routes = express();

routes.use(usersRoute);

export { routes }