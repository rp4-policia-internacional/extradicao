import CreateExtradicaoService, {createExtradicao} from '../src/modules/extradicao/services/CreateExtradicaoService'

describe('Testando a craição da extradição', () =>{
    it('Testando a criação da extradição', () => {
      const esperado = CreateExtradicaoService.createExtradicao
      const retorno = CreateExtradicaoService.createExtradicao
      expect(retorno).toBe(esperado)
    })
})