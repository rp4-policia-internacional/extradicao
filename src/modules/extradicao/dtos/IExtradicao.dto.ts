export default interface IExtradicaoDTO {
  id: string;
  paisOrigem: string;
  agente_id: string;
  nome:string;
  transporte:string;
  data_inicio: Date;
  data_fim: Date;
}
