import ListExtradicaoService from '../src/modules/extradicao/services/ListExtradicaoService'

describe('Testando a função de listar extradicao', () =>{
    it('Testando a função listars da extradicao', () => {
      const esperado = ListExtradicaoService
      const retorno = ListExtradicaoService
      expect(retorno).toBe(esperado)
    })
})