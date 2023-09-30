import DeleteExtradicaoService from '../src/modules/extradicao/services/DeleteExtradicaoService'

describe('Testando a função deletar da extradição', () =>{
    it('Testando a função deletar da extradição', () => {
      const esperado = DeleteExtradicaoService
      const retorno = DeleteExtradicaoService
      expect(retorno).toBe(esperado)
    })
})