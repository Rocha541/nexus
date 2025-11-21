<p align="center">
  <a href="[http://nestjs.com/](http://nestjs.com/)" target="blank"><img src="[https://nestjs.com/img/logo-small.svg](https://nestjs.com/img/logo-small.svg)" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: [https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456](https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456)
[circleci-url]: [https://circleci.com/gh/nestjs/nest](https://circleci.com/gh/nestjs/nest)

  <p align="center">A progressive <a href="[http://nodejs.org](http://nodejs.org)" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  <p align="center">
<a href="[https://www.npmjs.com/~nestjscore](https://www.npmjs.com/~nestjscore)" target="_blank"><img src="[https://img.shields.io/npm/v/@nestjs/core.svg](https://img.shields.io/npm/v/@nestjs/core.svg)" alt="NPM Version" /></a>
<a href="[https://www.npmjs.com/~nestjscore](https://www.npmjs.com/~nestjscore)" target="_blank"><img src="[https://img.shields.io/npm/l/@nestjs/core.svg](https://img.shields.io/npm/l/@nestjs/core.svg)" alt="Package License" /></a>
<a href="[https://www.npmjs.com/~nestjscore](https://www.npmjs.com/~nestjscore)" target="_blank"><img src="[https://img.shields.io/npm/dm/@nestjs/common.svg](https://img.shields.io/npm/dm/@nestjs/common.svg)" alt="NPM Downloads" /></a>
<a href="[https://circleci.com/gh/nestjs/nest](https://circleci.com/gh/nestjs/nest)" target="_blank"><img src="[https://img.shields.io/circleci/build/github/nestjs/nest/master](https://img.shields.io/circleci/build/github/nestjs/nest/master)" alt="CircleCI" /></a>
<a href="[https://discord.gg/G7Qnnhy](https://discord.gg/G7Qnnhy)" target="_blank"><img src="[https://img.shields.io/badge/discord-online-brightgreen.svg](https://img.shields.io/badge/discord-online-brightgreen.svg)" alt="Discord"/></a>
<a href="[https://opencollective.com/nest#backer](https://opencollective.com/nest#backer)" target="_blank"><img src="[https://opencollective.com/nest/backers/badge.svg](https://opencollective.com/nest/backers/badge.svg)" alt="Backers on Open Collective" /></a>
<a href="[https://opencollective.com/nest#sponsor](https://opencollective.com/nest#sponsor)" target="_blank"><img src="[https://opencollective.com/nest/sponsors/badge.svg](https://opencollective.com/nest/sponsors/badge.svg)" alt="Sponsors on Open Collective" /></a>
  <a href="[https://paypal.me/kamilmysliwiec](https://paypal.me/kamilmysliwiec)" target="_blank"><img src="[https://img.shields.io/badge/Donate-PayPal-ff3f59.svg](https://img.shields.io/badge/Donate-PayPal-ff3f59.svg)" alt="Donate us"/></a>
    <a href="[https://opencollective.com/nest#sponsor](https://opencollective.com/nest#sponsor)"  target="_blank"><img src="[https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg](https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg)" alt="Support us"></a>
  <a href="[https://twitter.com/nestframework](https://twitter.com/nestframework)" target="_blank"><img src="[https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow](https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow)" alt="Follow us on Twitter"></a>
</p>
  # Meu Projeto NestJS

## Description

Este é um repositório inicial (starter) do framework NestJS, utilizando TypeScript para a construção de aplicações server-side eficientes e escaláveis.

---

## ⚙️ Configuração do Projeto

Para começar a rodar o projeto localmente, siga os passos abaixo:

### Instalação de Dependências

Certifique-se de usar o gerenciador de pacotes correto (neste caso, `pnpm`):

```bash
$ pnpm install
▶️ Compilar e Executar o Projeto
Use os scripts definidos no package.json para iniciar o servidor:

Bash

# desenvolvimento (executa e reinicia automaticamente em mudanças - modo 'watch')
$ pnpm run start:dev

# modo padrão (executa o build e inicia)
$ pnpm run start

# modo de produção
$ pnpm run start:prod
📚 Documentação da API (Swagger)
A documentação interativa da API, gerada pelo Swagger, fica disponível automaticamente quando o projeto está rodando em modo de desenvolvimento (pnpm run start:dev).

Acesse a documentação no seu navegador:

http://localhost:3000/api-docs
Nota: Se você configurou uma porta diferente (ex: 8080) ou um caminho de documentação diferente, ajuste o link acima para refletir sua configuração.

🧪 Execução de Testes
Para garantir a qualidade do código, execute os testes com os seguintes comandos:

Bash

# testes de unidade
$ pnpm run test

# testes e2e (end-to-end)
$ pnpm run test:e2e

# cobertura de testes
$ pnpm run test:cov
Deployment
When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the deployment documentation for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out Mau, our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

Bash

$pnpm install -g @nestjs/mau$ mau deploy
With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

License
Nest is MIT licensed.