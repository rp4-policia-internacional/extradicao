import CreateExtradicaoService from "@modules/extradicao/services/CreateExtradicaoService";
import { container } from "tsyringe";
import { Request, Response } from "express";
import DeleteExtradicaoService from "@modules/extradicao/services/DeleteExtradicaoService";
import FindOneExtradicaoService from "@modules/extradicao/services/FindOneExtradicaoService";
import ListExtradicaoService from "@modules/extradicao/services/ListExtradicaoService";
import UpdateExtradicaoService from "@modules/extradicao/services/UpdateExtradicaoService";


export default class ExtadicaoController {
    public async create(req: Request, res: Response): Promise<Response>{
        const createExtradicao = container.resolve(CreateExtradicaoService);
        const {
            id,
            agente_id,
            id_criminoso,
            transporte,
            data_inicio ,
            data_fim,
            id_pais_origem,

          } = req.body;
           const formatedDate = new Date(data_inicio).toISOString();
           const formatedDate2 = new Date(data_fim).toISOString();


        const createdExtradicao = await createExtradicao.execute({
           //id: "",// Preencha com o valor apropriado, ou deixe vazio se for um UUID gerado automaticamente

           id,
           agente_id,
           id_criminoso,
           transporte,
           data_inicio: new Date(formatedDate),
           data_fim: new Date(formatedDate2),
           id_pais_origem,

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
           agente_id,
           id_criminoso,
           transporte,
           data_inicio,
           data_fim,
           id_pais_origem,
        } = req.body;
           const formatedDate = new Date(data_inicio).toISOString();
           const formatedDate2 = new Date(data_fim).toISOString();
       
        const createExtradicao = await updateExtradicao
        .execute({
            id,
            agente_id,
            id_criminoso,
            transporte,
            data_inicio: new Date(formatedDate),
            data_fim: new Date(formatedDate2),
            id_pais_origem,

        });

        return res.json(createExtradicao).status(201).send();
    }


}