import IExtradicaoDTO from "@modules/extradicao/dtos/IExtradicao.dto";
import ExtradicaoEntity from "@modules/extradicao/entities/ExtradicaoEntity";
import IExtradicaoRepository from "@modules/extradicao/repositories/IExtradicaoRepository";
import { prisma } from "@shared/infra/prisma";

export default class ExtradicaoRepository implements IExtradicaoRepository {
        
    public async create(data: IExtradicaoDTO): Promise<ExtradicaoEntity> {
        const extradicao = await prisma.extradicao.create({ data });
        return extradicao as unknown as ExtradicaoEntity;
    }

    public async delete(id: string): Promise<void> {
        await prisma.extradicao.delete({ where: { id } });
    }

    public async findById(id: string): Promise<ExtradicaoEntity> {
        const extradicao = await prisma.extradicao.findUnique({ where: { id } });
        return extradicao as unknown as ExtradicaoEntity;
    }

    public async update(data: ExtradicaoEntity): Promise<ExtradicaoEntity> {
        const extradicao = await prisma.extradicao.update({ where: { id: data.id }, data });
        return extradicao; // Retorne a vitima atualizada
      }
      
    public async listAll(): Promise<ExtradicaoEntity[]> {
      
     return await prisma.extradicao.findMany();
    }

    
}
