import { NextFunction, Request, Response, Router } from 'express';

const usersRoute = Router();

usersRoute.get('/users',(req: Request,res: Response,next: NextFunction)=>{
    const users = [{name: 'Paula'}];
    res.status(200).send(users);
});

usersRoute.get("/users/:id",(req: Request<{id: number}>,res: Response,next: NextFunction)=>{
    const id = req.params.id;
    res.status(200).send(id);
})

usersRoute.post("/create",(req: Request<{id: number}>,res: Response,next: NextFunction)=>{
    const new_user = req.body;

    res.status(201).send(new_user);
})

export { usersRoute };