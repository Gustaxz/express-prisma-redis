## Estrutura de projeto que eu sigo

1. Prisma

    - A conexão com o banco fica no arquivo .env, que é criado automaticamente pelo prisma.
    - Para usar o prisma, basta escrever seu modelo no schema.prisma e rodar o comando `npx prisma migrate dev` para criar a primeira migração.
    - Existe uma instância do prisma no arquivo config/prisma.ts, que é importada em todos os arquivos que precisam de acesso ao banco de dados. Ele provê os métodos para acessar o banco de dados.

2. Controllers e Router

    - Só uso o básico mesmo. Deixo separado os arquivos na pasta controllers e depois importo no router.ts.

3. Entities

    - Gosto de usar entidades principalmente por causa do typescript. É a mesma coisa que no Java/C#, onde você cria uma classe para representar uma tabela do banco de dados. No caso do typescript, você cria uma interface para representar uma tabela do banco de dados. Isso ajuda muito na hora de fazer os controllers, pois você pode usar o autocomplete do vscode para ver os campos da tabela.

4. Services

    - Isso é meio firula, mas acho legal separar a lógica da parte http.

5. Redis

    - Para usar o redis, acesse o arquivo config/redis.ts
    - Para adicionar os pacientes, estou usando recurso de listas do redis. Existe outros tipos, mas com esse dá pra fazer ordenação e tal.
    - Os comandos são bem simples. Começa com L de "lista" e logo em seguida vem a ação desejada. EX: LPUSH para fazer um push(adicionar a lista)
    - Verfique em https://redis.io/docs/data-types/lists/
    - Fiz uma implementação bem simples, mas acho que dá pra entender como funciona. Se encontra no arquivo services/queue-patient.ts

6. Resumindo

    - O controller recebe a requisição, chama o service, o service chama o prisma, o prisma acessa o banco de dados e retorna o resultado para o service, o service retorna o resultado para o controller, o controller retorna o resultado para o client (Copilot pediu pra adicionar isso).

    - Fiz isso aqui mais para mostrar como funciona o prisma + express. Acho que até serve de boilerplate. Acho que é uma estrutura bem parecida com
      Spring, Asp.Net, etc, então vocês vão tirar de letra. Não precisa se assustar com typescript não, eu gosto de usar porque se não eu me perco kkkkkkk.
