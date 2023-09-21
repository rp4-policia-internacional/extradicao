class ExtradoicaoEntity {
  id: string;
  id_pais_origem: string;
  agente_id: string;
  id_criminoso:string;
  transporte:string;
  data_inicio: Date;
  data_fim: Date;

  constructor(
    id: string,
    id_pais_origem: string,
    agente_id: string,
    id_criminoso:string,
    transporte:string,
    data_inicio: Date,
    data_fim: Date
  ) {
    this.id= id;
    this.id_criminoso = id_criminoso;
    this.id_pais_origem = id_pais_origem;
    this.agente_id = agente_id;
    this.transporte = transporte;
    this.data_fim = data_fim;
    this.data_inicio = data_inicio;

  }
}

export default ExtradoicaoEntity;
