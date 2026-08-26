# Chat com WebSocket

Aplicação de chat em tempo real criada com Node.js e WebSocket. As mensagens enviadas são transmitidas para todos os usuários conectados ao servidor.

**Autor:** Mario Gonçalves de Freitas Junior  
**Data:** 26/08/2026

## Tecnologias

- Node.js
- WebSocket com a biblioteca `ws`
- HTML, CSS e JavaScript

## Como rodar

```bash
node server.js
```

### Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- npm, instalado junto com o Node.js

### Instalação

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node server.js
```

Quando o servidor iniciar, será exibida a mensagem:

```text
Servidor em http://localhost:3000
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

Para testar a comunicação entre usuários, abra a aplicação em duas abas ou janelas, informe nomes diferentes e envie mensagens.

## Funcionamento

- O servidor HTTP entrega a página localizada em `public/index.html`.
- A conexão WebSocket é criada automaticamente pelo navegador.
- Cada mensagem válida é enviada para todos os clientes conectados.
- O nome do usuário pode ter até 30 caracteres.
- O texto da mensagem pode ter até 500 caracteres.
- Mensagens não são armazenadas após o encerramento do servidor.

## Estrutura do projeto

```text
.
├── package.json      # Configuração e dependências do projeto
├── server.js         # Servidor HTTP e WebSocket
└── public/
    └── index.html    # Interface do chat
```

## Encerrar o servidor

No terminal em que o servidor está rodando, pressione `Ctrl + C`.
