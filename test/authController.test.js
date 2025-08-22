const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');
const app = require('../app');

describe('Auth Controller', () => {
  it('Quando o login é válido o retorno será 200', async () => {
    const resposta = await request(app)
      .post('/login')
      .send({
        username: 'user',
        password: 'user123'
      });
    expect(resposta.status).to.equal(200);
    expect(resposta.body.message).to.equal('Login realizado com sucesso!');
  });

  it('Quando o login é inválido o retorno será 401', async () => {
    const resposta = await request(app)
      .post('/login')
      .send({
        username: 'user',
        password: 'senhaerrada'
      });
    expect(resposta.status).to.equal(401);
    expect(resposta.body.message).to.equal('Credenciais inválidas!');
  });

  it('Quando o usuário não existe o retorno será 401', async () => {
    const resposta = await request(app)
      .post('/login')
      .send({
        username: 'naoexiste',
        password: 'qualquer'
      });
    expect(resposta.status).to.equal(401);
    expect(resposta.body.message).to.equal('Credenciais inválidas!');
  });

  it('Quando o corpo da requisição está vazio o retorno será 401', async () => {
    const resposta = await request(app)
      .post('/login')
      .send({});
    expect(resposta.status).to.equal(401);
    expect(resposta.body.message).to.equal('Credenciais inválidas!');
  });

  it('Quando o login é válido para admin o retorno será 200', async () => {
    const resposta = await request(app)
      .post('/login')
      .send({
        username: 'admin',
        password: 'admin123'
      });
    expect(resposta.status).to.equal(200);
    expect(resposta.body.message).to.equal('Login realizado com sucesso!');
  });
});
