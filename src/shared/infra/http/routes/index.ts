// routes.ts
import extradicaoRoutes from '@modules/extradicao/infra/http/routes/extradicao.routes';
import { Router } from 'express';

const router = Router();

router.use("/extradicao", extradicaoRoutes);

export default router;