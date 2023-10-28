import DeleteExtradicaoService from '../src/modules/extradicao/services/DeleteExtradicaoService'

describe('Testando a craição da extradição', () =>{
  it('Testando a atualização da extradição', () => {
    var id = "1"
    var id_pais_origem = "2"
    var agente_id ="3"
    var id_criminoso = "4"
    var transporte = "Navio"
    var data_inicio ="2023-09-5"
    var data_fim = "2023-09-05"
    const esperado = new DeleteExtradicaoService(id,id_pais_origem,agente_id,id_criminoso,transporte,data_inicio,data_fim)
    const retorno = new DeleteExtradicaoService(" "," "," "," "," "," "," ")
    expect(retorno).not.toBe(esperado)
  })
})