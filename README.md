## Índice  
- [Sobre o Projeto](#sobre-o-projeto)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Pré-requisitos](#pré-requisitos)  
- [Instalação](#instalação)  
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)  
- [Execução do Projeto](#execução-do-projeto)  
- [Testando as Requisições](#testando-as-requisições)  
- [Créditos](#créditos)  

---

## **Sobre o Projeto**  
O *BookStore* é um projeto que foi criado para a discipçina de BackEnd e é voltado para o gerenciamento de uma livraria virtual, oferecendo uma API robusta e eficiente. 
O foco aqui é a escalabilidade e organização, ele foi desenvolvido para atender às demandas modernas, mas ainda pode melhorar.  

Usando tecnologias como **Node.js**, **TypeScript** e **PostgreSQL**, o *BookStore* combina desempenho e confiabilidade, ideal para sistemas que exigem alta disponibilidade.  

## **Funcionalidades**  
- **Autenticação de Usuários**:  
  Cadastro e login com validação de dados.  
- **Gestão de Livros**:  
  Adicionar e consultar livros da livraria.  

## **Tecnologias presentes no projeto**  
- **Node.js**  
- **Express.js**  
- **TypeScript**  
- **PostgreSQL**  
- **Jest**   

## **Pré-requisitos**  
Antes de começar, você precisará das seguintes ferramentas:  
- **Node.js** (versão 18 ou superior)  
- **PostgreSQL** (banco de dados)  
- Um editor de código como o **VS Code**.  

## **Instalação**  

1. Clone o repositório:  
   ```bash  
   git clone https://github.com/DutraOne/projetoLivrariaDutra
   ```  

2. Acesse o diretório do projeto:  
   ```bash  
   cd bookstore  
   ```  

3. Instale as dependências:  
   ```bash  
   npm install express pg dotenv  
   npm install --save-dev typescript jest @types/jest ts-jest supertest @types/express  
   ```  

## **Configuração do Banco de Dados**  

1. Certifique-se de que o PostgreSQL está em execução.  
2. Configure a conexão no arquivo `src/config/database.ts`.  
   - Ajuste as chaves de conexão para evitar erros durante a execução.  
3. Crie as tabelas no banco de dados:  
   ```bash  
   npx ts-node src/migrations/bookMigrations.ts  # Tabela de livros  
   npx ts-node src/migrations/migrations.ts     # Tabela de usuários  
   ```  

## **Execução do Projeto**  

Com o ambiente configurado, inicie o servidor:  
```bash  
npx ts-node src/server.ts  
```  

A API estará disponível em:  
```
http://localhost:3000  
```  

## **Testando as Requisições**  

As requisições podem ser testadas usando o arquivo `requests.http`. Para isso:  
1. Instale a extensão **REST Client** no VS Code.  

Alternativamente, use os comandos `curl` no terminal:  

1. **Consulta de Usuários**:  
   ```bash  
   curl -X GET http://localhost:3000/users  
   ```  

2. **Registro de Usuários**:  
   ```bash  
   curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"name": "Jeremias", "email": "jeremias@example.com", "password": "senhaSeguraa"}'  
   ```  

3. **Login de Usuário**:  
   ```bash  
   curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email": "jeremias@example.com", "password": "senhaSeguraa"}'  
   ```  

4. **Consulta de Livros**:  
   ```bash  
   curl -X GET http://localhost:3000/books  
   ```  

5. **Registro de Livros**:  
   ```bash  
   curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title": "Isaías 54:17", "author": "Isaías", "price": "59.90"}'  
   ```  

## **Créditos**  

O projeto em questão foi feito por:
    - Lucas Dutra
    - RA: 62593