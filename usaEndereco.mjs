import Endereco from './pessoas/Endereco.mjs';

const endereco = new Endereco();

try {
  await endereco.setCep('72015565');

  console.log('CEP:', endereco.getCep());
  console.log('Logradouro:', endereco.getLogradouro());
  console.log('Bairro:', endereco.getBairro());
  console.log('Cidade:', endereco.getLocalidade());
  console.log('UF:', endereco.getUf());

  console.log('Complemento:', endereco.getComplemento() || 'não informado');
  console.log('Estado:', endereco.getEstado());
  console.log('Região:', endereco.getRegiao());
  console.log('DDD:', endereco.getDdd());

  console.log('\n' + endereco.mostrarEnderecoCompleto());
} catch (erro) {
  console.error('Erro ao consultar o CEP:', erro.message);
}
