### arquitetura API MVC e suas camadas

A arquitetura API MVC (Model-View-Controller) é um padrão de design amplamente utilizado no desenvolvimento de aplicações web. Ela divide a aplicação em três componentes principais: Modelo (Model), Visão (View) e Controlador (Controller). Cada componente tem responsabilidades específicas, o que facilita a manutenção, escalabilidade e organização do código.

#### Camadas da arquitetura MVC

1. **Modelo (Model)**:

   - Responsável pela lógica de negócios e pela manipulação dos dados da aplicação.
   - Interage com o banco de dados para criar, ler, atualizar e deletar informações.
   - Representa os dados e as regras de negócio da aplicação.
   - Quando usamos ORM (Object-Relational Mapping), o modelo geralmente é onde as entidades e suas relações são definidas.

   2. Config (Configuração):

   - Responsável por armazenar as configurações da aplicação, como conexões de banco de dados, variáveis de ambiente e outras definições globais.

   3. controllers (Controladores):

   - Responsável por receber as requisições do cliente, processá-las e retornar as respostas apropriadas.
   - Atua como intermediário entre o Modelo e a Visão, coordenando a lógica de negócios e a apresentação dos dados.
   - Contém métodos que correspondem às ações que podem ser realizadas na aplicação, como criar, ler, atualizar e deletar recursos.

   4. routes (Rotas):

   - Define os endpoints da API e mapeia as requisições HTTP para os métodos apropriados nos controladores.

   5. services (Serviços):

   - Contém a lógica de negócios que pode ser reutilizada em diferentes partes da aplicação.
   - Pode chamar a camada repository para interagir com o banco de dados e aplicar regras de negócio.

   6. repository (Repositório):

   - Responsável pela comunicação direta com o banco de dados.
   - Contém métodos para realizar operações CRUD (Create, Read, Update, Delete) nos dados.

   7. utils (Utilitários):

   - Contém funções auxiliares e utilitárias que podem ser usadas em várias partes da aplicação.

   8. middlewares (Middlewares):

   - Funções que interceptam as requisições HTTP antes de chegarem aos controladores
   - Usados para autenticação, logging, tratamento de erros, entre outros.

   9. views (Visões):

   - Responsável pela apresentação dos dados ao usuário.
   - Em uma API, essa camada pode ser representada pelos formatos de resposta, como JSON ou XML.

#### Benefícios da arquitetura MVC

- **Separação de responsabilidades**: Cada componente tem uma função clara, facilitando a manutenção e o desenvolvimento.
- **Facilidade de teste**: A separação das camadas permite testar cada componente de forma isolada.
- **Reutilização de código**: A lógica de negócios pode ser reutilizada em diferentes partes da aplicação.
- **Escalabilidade**: A arquitetura facilita a adição de novas funcionalidades sem impactar outras partes do sistema.
- **Organização**: A estrutura clara ajuda os desenvolvedores a entenderem rapidamente o funcionamento da aplicação.

### O que é um ORM?

ORM (Object-Relational Mapping) é uma técnica que permite que os desenvolvedores trabalhem com objetos em vez de escrever consultas SQL diretamente, o ORM facilita a manipulação dos dados e melhora a produtividade.
