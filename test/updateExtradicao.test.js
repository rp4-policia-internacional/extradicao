import UpdateExtradicaoService, {updateExtradicao} from '../src/modules/extradicao/services/UpdateExtradicaoService'

describe('Testando a função atualizar  extradição', () =>{
    it('Testando a função atualizar  extradição', () => {
      const esperado = UpdateExtradicaoService.updateExtradicao
      const retorno = UpdateExtradicaoService.updateExtradicao
      expect(retorno).toBe(esperado)
    })
})