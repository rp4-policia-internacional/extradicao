export default interface IExtradicaoDTO {
  id: string;
  id_pais_origem: string;
  agente_id: string;
  id_criminoso:string;
  transporte:string;
  data_inicio: Date;
  data_fim: Date;
}
