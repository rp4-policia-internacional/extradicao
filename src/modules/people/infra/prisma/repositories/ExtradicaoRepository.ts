import CreateExtradicaoService from "@modules/extradicao/services/CreateExtradicaoService";
import { container } from "tsyringe";
import { Request, Response } from "express";
import DeleteExtradicaoService from "@modules/extradicao/services/DeleteExtradicaoService";
import FindOneExtradicaoService from "@modules/extradicao/services/FindOneExtradicaoService";
import ListExtradicaoService from "@modules/extradicao/services/ListExtradicaoService";
import UpdateExtradicaoService from "@modules/extradicao/services/UpdateExtradicaoService";


export default class VitimaController {
    public async create(req: Request, res: Response): Promise<Response>{
        const createExtradicao = container.resolve(CreateExtradicaoService);
        
        const {
            id,
            paisOrigem,
            agente_id,
            nome,
            transporte,
            data_inicio,
            data_fim,
          } = req.body;

        const createdExtradicao = await createExtradicao.execute({
           //id: "",// Preencha com o valor apropriado, ou deixe vazio se for um UUID gerado automaticamente
           id,
           paisOrigem,
           agente_id,
           nome,
           transporte,
           data_inicio,
           data_fim,
        });

        return res.status(201).json(createdExtradicao);
    }


    public async delete(req: Request, res: Response): Promise<Response> {
        const deleteExtradicao = container.resolve(DeleteExtradicaoService);

        const {id} = req.params;

        const deletedExtradicao = await deleteExtradicao.execute(
            id
        );

        return res.json(deletedExtradicao).status(202).send();

    }

    public async getOne(req: Request, res: Response): Promise<Response> {
        const getOneExtradicao = container.resolve(FindOneExtradicaoService);

        const {id} = req.params;

        const gotOneExtradicao = await getOneExtradicao.execute(
            id
        );

        return res.json(gotOneExtradicao).status(200).send();

    }

    public async getAll(req: Request, res: Response): Promise<Response> {
        const getAllVExtradicao = container.resolve(ListExtradicaoService);

        const gotAllExtradicao = await getAllVExtradicao.execute();

        return res.json(gotAllExtradicao).status(200).send();
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const updateExtradicao = container.resolve(UpdateExtradicaoService);

        const {
            id,
           paisOrigem,
           agente_id,
           nome,
           transporte,
           data_inicio,
           data_fim,} = req.body;

       
        const createExtradicao = await updateExtradicao
        .execute({
            id,
            paisOrigem,
            agente_id,
            nome,
            transporte,
            data_inicio,
            data_fim,
        });

        return res.json(createExtradicao).status(201).send();
    }


}