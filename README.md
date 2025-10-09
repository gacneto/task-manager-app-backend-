<div align="center">
  <img src="https://nestjs.com/img/logo_text.svg" width="300" alt="NestJS Logo">
  <h1>Task API - Gerenciador de Tarefas</h1>
  <p>
    <strong>Uma API RESTful robusta para gerenciamento de tarefas por usuário, construída com NestJS.</strong>
  </p>
  <p>
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
    <img src="https://img.shields.io/badge/NestJS-v10.0.0-red" alt="NestJS Version">
    <img src="https://img.shields.io/badge/PostgreSQL-v13-blue" alt="PostgreSQL Version">
    <img src="https://img.shields.io/badge/Docker-Ready-blue?logo=docker" alt="Docker Ready">
  </p>
</div>

---

## 🔗 Repositório do Frontend

**Importante:** Esta é uma aplicação backend que constrói uma API. O projeto frontend (construído em Angular) está finalizado para visualização do projeto final.

➡️ **Repositório do Frontend:** [Link para o repositório da Pagina Web Angular](https://github.com/gacneto/angular-task-manager-app-frontend.git)

---

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Features](#-features)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🚀 Como Rodar a Aplicação](#-como-rodar-a-aplicação)
- [📚 Documentação da API](#-documentação-da-api)
- [📄 Licença](#-licença)

---

## 📖 Sobre o Projeto

A **Task API** é um backend completo que permite aos usuários se cadastrarem, autenticarem e gerenciarem suas próprias listas de tarefas. Cada usuário tem acesso apenas às suas tarefas, garantindo a privacidade e a segurança dos dados através de autenticação via **JWT (JSON Web Token)**.

Este projeto foi desenvolvido como um backend escalável e bem estruturado, pronto para ser integrado com qualquer aplicação frontend, como Angular, React ou Vue.js.

---

## ✨ Features

- ✅ **Autenticação de Usuários**: Sistema completo de registro (`signup`) e login (`signin`) com senhas criptografadas (bcrypt).
- 🔐 **Autorização com JWT**: Rotas protegidas que só podem ser acessadas com um token JWT válido.
- 🗂️ **CRUD de Tarefas**: Operações completas de Criar, Ler, Atualizar e Deletar tarefas.
- 👤 **Tarefas por Usuário**: Cada tarefa está estritamente vinculada ao usuário que a criou.
- 🐳 **Ambiente Dockerizado**: O banco de dados PostgreSQL roda em um container Docker, facilitando a configuração do ambiente de desenvolvimento.
- 📝 **Validação de Dados**: Uso de DTOs (Data Transfer Objects) com `class-validator` para garantir a integridade dos dados de entrada.
- 📄 **Documentação Interativa**: Documentação da API gerada automaticamente com Swagger (OpenAPI), permitindo testar os endpoints diretamente pelo navegador.

---

## 🛠️ Tecnologias Utilizadas

A tabela abaixo lista as principais tecnologias e ferramentas utilizadas no desenvolvimento da API:

| Ferramenta | Descrição |
|------------|-------------|
| **NestJS** | Um framework Node.js progressivo para construir aplicações backend eficientes e escaláveis. |
| **TypeScript** | Superset do JavaScript que adiciona tipagem estática ao código. |
| **PostgreSQL** | Um poderoso sistema de banco de dados relacional de código aberto. |
| **TypeORM** | ORM (Object-Relational Mapper) para TypeScript e JavaScript. |
| **Docker** | Plataforma para desenvolver, implantar e executar aplicações em containers. |
| **JWT** | Padrão aberto (RFC 7519) para criar tokens de acesso que afirmam um número de "claims". |
| **Bcrypt** | Biblioteca para "hashear" senhas de forma segura. |
| **Swagger (OpenAPI)** | Ferramenta para projetar, construir, documentar e consumir serviços RESTful. |
| **Class Validator** | Biblioteca para validação de DTOs baseada em decorators. |

---

## 🚀 Como Rodar a Aplicação

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### **Pré-requisitos**

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
- [Git](https://git-scm.com)
- [Node.js (v18 ou superior)](https://nodejs.org/en/)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/install/)

### **Passo a Passo**

1.  **Clone o repositório:**
    ```bash
    git clone <https://github.com/gacneto/nestjs-task-manager-app-backend.git>
    cd nestjs-task-manager-app-backend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    - Crie uma cópia do arquivo de exemplo `.env.example` e renomeie para `.env`.
    ```bash
    cp .env.example .env
    ```
    - Abra o arquivo `.env` e preencha as variáveis com suas credenciais do banco de dados e um segredo para o JWT. Os valores padrão devem funcionar com a configuração do `docker-compose.yml`.

4.  **Inicie o banco de dados com Docker:**
    ```bash
    docker-compose up -d
    ```
    Este comando irá criar e iniciar o container do PostgreSQL em segundo plano.

5.  **Rode a aplicação:**
    ```bash
    npm run start:dev
    ```
    A API estará disponível em `http://localhost:3000`.

---

## 📚 Documentação da API

A documentação completa e interativa dos endpoints está disponível através do Swagger. Após iniciar a aplicação, acesse o seguinte endereço em seu navegador:

**[http://localhost:3000/api](http://localhost:3000/api)**

Lá você poderá ver todos os endpoints, seus DTOs, e até mesmo testá-los diretamente. Para as rotas protegidas (Tasks), lembre-se de primeiro obter um token no endpoint `POST /auth/signin` e depois autorizar suas requisições clicando no botão "Authorize".

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<div align="center">
  Feito por [Lucas Barcelar](https://github.com/gacneto)
</div>
