import UpdateExtradicaoService, {id,id_pais_origem,agente_id,id_criminoso,transporte,data_inicio,data_fim} from '../src/modules/extradicao/services/UpdateExtradicaoService'

describe('Testando a craição da extradição', () =>{
  it('Testando a atualização da extradição', () => {
    var id = "1"
    var id_pais_origem = "2"
    var agente_id ="3"
    var id_criminoso = "4"
    var transporte = "Avião"
    var data_inicio ="2023-09-5"
    var data_fim = "2023-09-05"
    const esperado = new UpdateExtradicaoService(id,id_pais_origem,agente_id,id_criminoso,transporte,data_inicio,data_fim)
    const retorno = new UpdateExtradicaoService("1","2","3","4","Navio","2023-09-5","2023-09-15")
    expect(retorno).not.toBe(esperado)
  })
})