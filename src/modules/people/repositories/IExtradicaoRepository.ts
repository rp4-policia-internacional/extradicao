import IExtradicaoDTO from "../dtos/IExtradicao.dto";
import ICreateExtradicao from "../dtos/IExtradicao.dto";
import ExtradoicaoEntity from "../entities/ExtradicaoEntity";
import CapturaEntity from "../entities/ExtradicaoEntity";


export default interface IExtradicaoRepository{
    create(data: IExtradicaoDTO): Promise<ExtradoicaoEntity>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<ExtradoicaoEntity>;
    update(data: CapturaEntity): Promise<ExtradoicaoEntity>;
    listAll(): Promise<ExtradoicaoEntity[]>;
}