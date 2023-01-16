# Como rodar o projeto?

- git clone https://github.com/daviArttur/test_innovationsv.git
- cd test_innovationsv/
- npm i
- npm run build
- npm start

### Rodar os testes
- npm test


## Observação

Utilizei um arquivo SQLITE para armazenar os dados, então não precisa fazer
configurações extras para o banco de dados.

A api do IBGE não estava funcionando no ambiente do node então criei um arquivo .JSON local

Se possível gostaria de receber um feedback😁

## Rotas
GET      http://localhost:3000/products
DELETE   http://localhost:3000/products/:productId
PUT      http://localhost:3000/products/:productId
POST     http://localhost:3000/

GET      http://localhost:3000/comments

## Requisitos do cliente

```

Desenvolver um CRUD de uma WEB API, para o gerenciamento de uma loja
entregando os endpoints para realizar listagem, cadastro, atualização e 
remoção de produtos.

A API deve ser desenvolvida utilizando Node.js com Typescript,
podendo utilizar sua biblioteca ou framework de preferência.

Para a modelagem do banco de dados, que pode ser o de sua preferência, utilize a
seguinte regra:
- id;
- name;
- category;
- status (ACTIVE, INACTIVE);
- quantity;
- created_at;
- updated_at;
- deleted_at;

EXTRA:
Caso sinta-se confortável, realize a implementação de um endpoint na api que realiza a
consulta dos municípios do Rio de Janeiro, utilizando a API do IBGE e realize a inserção em uma
tabela do seu banco de dados.
```

## Linguagem Ubíqua/Universal
- **Product**: são os produtos da nossa loja
