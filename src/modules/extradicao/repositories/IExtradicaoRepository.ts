import IExtradicaoDTO from "../dtos/IExtradicao.dto";
import ExtradicaoEntity from "../entities/ExtradicaoEntity";

export default interface IExtradicaoRepository {

    create (data: IExtradicaoDTO): Promise<ExtradicaoEntity>
    delete (id: String): Promise<void>;
    findById (id: String): Promise<ExtradicaoEntity>;
    update(data: ExtradicaoEntity): Promise<ExtradicaoEntity>;
    listAll(): Promise<ExtradicaoEntity[]>;
}