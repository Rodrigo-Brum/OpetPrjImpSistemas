# OpetPrjImpSistemas

##Backend
  No backend, instale todas as dependencias usando o comando:
      npm install

  Para usar as migrations, certifique-se de estar na pasta backend e execute o comando:
      knex migrate:latest

  O backend roda na porta http://localhost:3000, certifique-se de estar na pasta correta e execute o comando: 
      npm start
      
 ##Frontend
  No frontend, instale todas as dependencias usando o comando:
    npm install
    
  O frontend roda na porta http://localhost:8080, certifique-se de estar na pasta correta e execute o comando:
    npm run serve
    
### O que falta:
  Ativar a escolha do curso que será recuperado no banco de dados.
  
#### Bug
  Login ao ter sucesso, não executa a instrução. A solução provisória é um console.log() no backend que indica quando a operação teve sucesso. É exebida no console do Backend.
