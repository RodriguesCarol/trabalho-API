# API de Login Simples

Esta é uma API REST básica para autenticação de usuários, construída com Node.js, Express e Swagger. O projeto é dividido em camadas de Controller, Service e Model, facilitando testes automatizados e manutenção.

## Estrutura de Diretórios

```
controller/      # Lógica das rotas
service/         # Regras de negócio
model/           # Modelos de dados
app.js           # Configuração do Express e Swagger
server.js        # Inicialização do servidor
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repo>
   cd trabalho-API
   ```
2. Instale as dependências:
   ```bash
   npm install express swagger-ui-express swagger-jsdoc
   ```

## Como executar

- Para iniciar o servidor:
  ```bash
  node server.js
  ```
- A API estará disponível em `http://localhost:3000`.
- A documentação Swagger estará disponível em `http://localhost:3000/api-docs`.

## Endpoints

- `POST /login` - Realiza login de usuário
  - Body:
    ```json
    {
      "username": "admin",
      "password": "admin123"
    }
    ```

## Testes

Para testes automatizados, importe o `app.js` em seu arquivo de teste (ex: usando Supertest).

## Licença

MIT
