# Título: Petfinder API REST 
Criado em: 22 de junho de 2022  
Atualizado em: 09 de agosto de 2022  
      
## Identificação do Grupo  
Repositório cs-2022-1_g4 definido para o versionamento dos artefatos gerados pelo **Grupo 4** na construção de uma API REST.  
Este é o trabalho final da disciplina **Construção de Software** do quinto período de **Engenharia de Software**, do **INF/UFG**, no semestre 2022/1.  
  
## Participantes  
|#|Nome|Usuário|Papel|
|---|---|---|---|
|1|FILLIPE MENDONCA ALBUQUERQUE|[FA101](https://github.com/FA101)|gerente de projetos-desenvolvedor||
|2|GUSTAVO HENRIQUE DE FREITAS MARTINS|[ghfmartins](https://github.com/ghfmartins)|produtct owner-desenvolvedor||
|3|JEFFERSON PEREIRA DA SILVA|[jefferson-pereira](https://github.com/jefferson-pereira)|tester-desenvolvedor||
|4|JOÃO MÁRIO FIDELIS MARTINS|[JoaoMario17](https://github.com/JoaoMario17)|arquiteto de software-desenvolvedor||
|5|MARCO TÚLIO RIBEIRO FÉLIX|[tmarcorf](https://github.com/tmarcorf)|analista de requisitos-desenvolvedor||
    
## Descrição do Produto 
O produto desenvolvido é uma API REST responsável pelo gerenciamento de pet desaparecidos, achados e para adoção. 
  
Pets são famílias para muitas pessoas. Eventos de desaparecimento infelizmente são comuns na vida dos pais de pet. Poder resolver esse tipo de situação com poucos cliques é o que toda pessoa busca quando passa por uma experiência dessa. O Petfinder foi pensado para isso: ajudar as pessoas a encontrarem seus pets.  
  
A API é capaz de receber informações de pets desaparecidos, achados e adotados em uma dada região, apresentando essas buscas para os usuários cadastrados. Isso conecta pessoas que precisam de apoio na busca de pets perdidos, voluntários que os encontram e conecta pets que buscam por uma família.  
  
## Problema  
**Baseado em** inúmeros casos de pets desaparecidos       
**Prevemos que** a pessoas que passam por esse tipo de experiência 
*Vão* ter dificuldade de apoio na busca de pets perdidos.  

**Baseado em** inúmeros casos de pessoas que encontram pets desaparecidos       
**Prevemos que** as pessoas que encontram os pets   
*Vão* enfrentar dificuldades de devolvê-los ao seu dono.   

**Baseado em** inúmeros casos de pets disponíveis para adoção   
**Prevemos que** a pessoas responsáveis em encontrar um novo lar para eles   
*Vão* ter dificuldade de encontrar pessoas interessadas na adoção.  
  
## Funcionamento da API REST  
A API REST permite que uma pessoa cria uma conta no sistema para:  
• cadastrar um pet desaparecido, incluindo informações que caracterizem bem o pet perdido  
• cadastrar um pet achado, incluindo informações que caracterizem bem o pet achado  
• cadastrar um pet disponível para adoção, incluindo informações que caracterizem bem o pet 
  
A API REST permite que um usuário realize consultas no sistema para:  
• listar pets desaparecidos para se informar sobre os pets desaparecidos em uma dada região  
• listar pets encontrados para se informar sobre os pets desaparecidos em uma dada região  
• listar pets disponíveis para adoção  

## Requisitos
1. **Cadastro de usuário**: O sistema deve suportar o cadastro de uma nova conta associada a um usuário
2. **Cadastro de pet desaparecido**: O usuário deve ser capaz de cadastrar um anúncio sobre um pet desaparecido
3. **Cadastro de pet encontrado**: O usuário deve ser capaz de cadastrar um anúncio sobre um pet encontrado
4. **Atualização de status da situação de pets desaparecidos/encontrados**: O sistema permite que cada usuário atualize os dados do anúncio que fez
5. **Consulta de pets encontrados**: O sistema permite listar os pets encontrados utilizando filtros
6. **Consulta de pets desaparecidos**: O sistema permite listar os pets desaparecidos utilizando filtros
7. **Cadastro de pet disponível para adoção**: O usuário deve ser capaz de cadastrar um anúncio sobre um pet disponível para adoção
8. **Consulta de pet disponível para adoção**: O sistema permite listar os pets disponíveis para adoção utilizando filtros
9. **Atualização de status da situação de pets dispiníveis para adoção**: O sistema permite que cada usuário atualize os dados do anúncio que fez

## Tecnologia empregadas   
1. JavaScript/TypeScript
2. NodeJS
3. Swagger
4. SonarQube
5. Sonarlint
6. Prisma ORM
7. Banco de dados SQLite
8. IDE VSCode

## Local de deploy  
1. Heroku (**pendente - fazer alinhamento com Gilmar**)

## Cronograma  
|Sprint|Atividade|Responsável|Início|Fim|Situação|Avaliação|
|---|---|---|---|---|---|---|
|1|Formação de Grupos. Definição de Temas|Equipe|03/06/2022|17/06/2022|Concluído|22/06/2022|
|2|Construção das Histórias de Usuário|Equipe|18/06/2022|01/07/2022|Concluído|06/07/2022|
|3|Modelagem da Arquitetura e Banco de Dados|Equipe|02/07/2022|15/07/2022|Concluído|20/07/2022|
|4|Implementação de Cadastros|Equipe|16/07/2022|29/07/2022|Conluído|03/08/2022|
|5|Implementação de Consultas|Equipe|30/07/2022|12/08/2022|Em andamento|17/08/2022|
|6|Implementação de Atualizações|Equipe|13/08/2022|26/08/2022|A fazer|31/08/2022|

## Estratégia de lançamento  
O lançamento da API REST terá Divulgação nas redes sociais, petshops, consultórios veterinários parceiros e entidade pública responsável pela proteção dos animais de Goiânia - GO, com alvancagem digital com shoppings petfriendly. Por ser uma ferramenta gratuita, a API REST estará disponível para a comunidade de desenvolvedores em formato opensource.   
