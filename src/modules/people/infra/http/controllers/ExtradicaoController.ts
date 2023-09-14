import CreateExtradicaoService from "@modules/extradicao/services/CreateExtradicaoService";
import { container } from "tsyringe";
import { Request, Response } from "express";
import DeleteExtradicaoService from "@modules/extradicao/services/DeleteExtradicaoaService";
import ListVitimaService from "@modules/vitima/services/ListVitimaService";
import UpdateVitimaService from "@modules/vitima/services/UpdateVitimaService";
import FindOneExtradicaoService from "../../../services/FindOneExtradicaoService";
import ListExtradicaoService from "../../../services/ListExtradicaoService";
import UpdateExtradicaoService from "../../../services/UpdateExtradicaoService";


export default class ExtradicaoController {
    public async create(req: Request, res: Response): Promise<Response>{
        const createExtradicao = container.resolve(CreateExtradicaoService);
        const  {
            ID,
            paisOrigem,
            agente_id,
            nome,
            transporte,
            data_inicio,
            data_fim,
          } = req.body;

        const createExtradicao = await createExtradicao.execute({
           //id: "",// Preencha com o valor apropriado, ou deixe vazio se for um UUID gerado automaticamente
           ID,
           paisOrigem,
           agente_id,
           nome,
           transporte,
           data_inicio,
           data_fim,
        });

        return res.status(201).json(createExtradicao);
    }


    public async delete(req: Request, res: Response): Promise<Response> {
        const deleteExtradicao = container.resolve(DeleteExtradicaoService);

        const {id} = req.params;

        const deleteExtradicao = await deleteExtradicao.execute(
            id
        );

        return res.json(deleteExtradicao).status(202).send();

    }

    public async getOne(req: Request, res: Response): Promise<Response> {
        const getOneExtradicao = container.resolve(FindOneExtradicaoService);

        const {id} = req.params;

        const getOneExtradicao = await getOneExtradicao.execute(
            id
        );

        return res.json(getOneExtradicao).status(200).send();

    }

    public async getAll(req: Request, res: Response): Promise<Response> {
        const getAllVExtradicao = container.resolve(ListExtradicaoService);

        const getAllVExtradicao = await getAllVExtradicao.execute();

        return res.json(getAllVExtradicao).status(200).send();
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const updateExtradicao = container.resolve(UpdateExtradicaoService);

        const {
            ID,
            paisOrigem,
            agente_id,
            nome,
            transporte,
            data_inicio,
            data_fim,} = req.body;

       
        const createExtradicao = await updateExtradicao.execute({
            ID,
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