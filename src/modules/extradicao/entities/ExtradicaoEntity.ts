class ExtradoicaoEntity {
  id: string;
  paisOrigem: string;
  agente_id: string;
  nome:string;
  transporte:string;
  data_inicio: Date;
  data_fim: Date;

  constructor(
    id: string,
    paisOrigem: string,
    agente_id: string,
    nome:string,
    transporte:string,
    data_inicio: Date,
    data_fim: Date
  ) {
    this.id= id;
    this.nome = nome;
    this.paisOrigem = paisOrigem;
    this.agente_id = agente_id;
    this.transporte = transporte;
    this.data_fim = data_fim;
    this.data_inicio = data_inicio;

  }
}

export default ExtradoicaoEntity;
