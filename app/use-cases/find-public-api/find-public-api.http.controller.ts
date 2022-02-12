import { Request, Response, Router } from 'express';

const findPublicApi = (req: Request, res: Response) => {
  res.json({'test': 1})
}

export const router = Router();

router.get('', findPublicApi);
