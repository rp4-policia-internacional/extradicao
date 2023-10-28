import CreateExtradicaoService from '../src/modules/extradicao/services/CreateExtradicaoService'
import createExtradicao, {id,id_pais_origem,agente_id,id_criminoso,transporte,data_inicio,data_fim} from '../src/modules/extradicao/services/CreateExtradicaoService'

describe('Testando a craição da extradição', () =>{
    it('Testando a criação da extradição', () => {
      var id = "1"
      var id_pais_origem = "2"
      var agente_id ="3"
      var id_criminoso = "4"
      var transporte = "Avião"
      var data_inicio ="2023-09-5"
      var data_fim = "2023-09-05"
      const esperado = new CreateExtradicaoService(id,id_pais_origem,agente_id,id_criminoso,transporte,data_inicio,data_fim)
      const retorno = new CreateExtradicaoService("1","2","3","4","Avião","2023-09-5","2023-09-15")
      expect(retorno).toEqual(esperado)
    })
})