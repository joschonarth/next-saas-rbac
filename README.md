<div align="center">

# 🛡️ Next SaaS RBAC

_A multi-tenant SaaS boilerplate with authentication and role-based access control._

<img src="https://img.shields.io/github/last-commit/joschonarth/next-saas-rbac?style=default&logo=git&logoColor=white&color=525252&labelColor=171717" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/joschonarth/next-saas-rbac?style=default&color=525252&labelColor=171717" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/joschonarth/next-saas-rbac?style=default&color=525252&labelColor=171717" alt="repo-language-count">
<a href="https://next-saas-rbac-web-khaki.vercel.app/"><img src="https://img.shields.io/badge/deploy-vercel-525252?style=default&logo=vercel&logoColor=white&labelColor=171717" alt="deploy-vercel"></a>

---

📃 [About](#-about)&nbsp;&nbsp;•&nbsp;&nbsp;
🛠️ [Tech Stack](#️-tech-stack)&nbsp;&nbsp;•&nbsp;&nbsp;
✨ [Features](#-features)&nbsp;&nbsp;•&nbsp;&nbsp;
🔒 [RBAC](#-rbac)&nbsp;&nbsp;•&nbsp;&nbsp;
📂 [Project Structure](#-project-structure)&nbsp;&nbsp;•&nbsp;&nbsp;
🚀 [Getting Started](#-getting-started)

</div>

---

## 📃 About

**Next SaaS RBAC** is a full-stack monorepo boilerplate for building a multi-tenant SaaS with **Next.js** and **Fastify**. It ships with everything needed to authenticate users, manage organizations and projects, invite members, and control access through a fine-grained **role-based access control (RBAC)** system — including a permissions table with roles such as Owner, Administrator, Member, Billing, and Anonymous.

The project is organized as a **Turborepo** monorepo, with a Next.js frontend and a Fastify API sharing common packages for authentication rules, environment validation, ESLint, Prettier, and TypeScript configuration.

---

## 🛠️ Tech Stack

### API

- 🟩 **[Node.js](https://nodejs.org/)** — JavaScript runtime for server-side execution.
- 🔥 **[Fastify](https://fastify.dev/)** — Fast and low-overhead web framework for Node.js.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Type safety across the entire codebase.
- 🔺 **[Prisma ORM](https://www.prisma.io/)** — Type-safe database ORM with migrations and Prisma Studio.
- 🐘 **[PostgreSQL](https://www.postgresql.org/)** — Reliable relational database.
- 🐳 **[Docker](https://www.docker.com/)** — Containerized database for a consistent dev environment.
- 🔑 **[@fastify/jwt](https://github.com/fastify/fastify-jwt)** — JWT-based authentication.
- 🔒 **[bcrypt](https://www.npmjs.com/package/bcrypt)** — Password hashing.
- 🛡️ **[CASL](https://casl.js.org/)** — Attribute-based access control for roles and permissions.
- 💎 **[Zod](https://zod.dev/)** — Runtime schema validation with full type inference.
- 📖 **[Swagger](https://github.com/fastify/fastify-swagger)** — Interactive API documentation.
- 🌱 **[Faker.js](https://fakerjs.dev/)** — Fake data generation for database seeding.

### Web

- ⚛️ **[Next.js](https://nextjs.org/)** — Full-stack React framework with App Router.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Type safety across the entire codebase.
- 🏝️ **[TanStack Query](https://tanstack.com/query)** — Async state management with caching.
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework.
- 🧩 **[Radix UI](https://www.radix-ui.com/)** / **[shadcn/ui](https://ui.shadcn.com/)** — Accessible, headless UI primitives and components.
- 🌗 **[next-themes](https://github.com/pacocoursey/next-themes)** — Light/dark theme support.
- 💎 **[Zod](https://zod.dev/)** — Runtime schema validation with full type inference.
- 🌐 **[ky](https://github.com/sindresorhus/ky)** — Lightweight HTTP client for the browser.

### Monorepo & Tooling

- 🏎️ **[Turborepo](https://turbo.build/)** — High-performance build system for the monorepo.
- 📦 **[pnpm workspaces](https://pnpm.io/workspaces)** — Efficient dependency management across packages.
- 🔍 **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)** — Shared, workspace-wide linting and formatting rules.

---

## ✨ Features

### Authentication

- [x] Authenticate using e-mail & password
- [x] Authenticate using GitHub account
- [x] Recover password using e-mail
- [x] Create an account (e-mail, name and password)

### Organizations

- [x] Create a new organization
- [x] Get organizations to which the user belongs
- [x] Update an organization
- [x] Shutdown an organization
- [x] Transfer organization ownership

### Invites

- [x] Invite a new member (e-mail, role)
- [x] Accept an invite
- [x] Revoke a pending invite

### Members

- [x] Get organization members
- [x] Update a member role

### Projects

- [x] Get projects within an organization
- [x] Create a new project (name, url, description)
- [x] Update a project (name, url, description)
- [x] Delete a project

### Billing

- [x] Get billing details for an organization ($20 per project / $10 per member, excluding the billing role)

---

## 🔒 RBAC

Roles & permissions.

### Roles

- Owner (counts as administrator)
- Administrator
- Member
- Billing (one per organization)
- Anonymous

### Permissions table

|                        | Administrator | Member | Billing | Anonymous |
| ---------------------- | :-----------: | :----: | :-----: | :-------: |
| Update organization    |      ✅       |   ❌   |   ❌    |    ❌     |
| Delete organization    |      ✅       |   ❌   |   ❌    |    ❌     |
| Invite a member        |      ✅       |   ❌   |   ❌    |    ❌     |
| Revoke an invite       |      ✅       |   ❌   |   ❌    |    ❌     |
| List members           |      ✅       |   ✅   |   ✅    |    ❌     |
| Transfer ownership     |      ⚠️       |   ❌   |   ❌    |    ❌     |
| Update member role     |      ✅       |   ❌   |   ❌    |    ❌     |
| Delete member          |      ✅       |   ⚠️   |   ❌    |    ❌     |
| List projects          |      ✅       |   ✅   |   ✅    |    ❌     |
| Create a new project   |      ✅       |   ✅   |   ❌    |    ❌     |
| Update a project       |      ✅       |   ⚠️   |   ❌    |    ❌     |
| Delete a project       |      ✅       |   ⚠️   |   ❌    |    ❌     |
| Get billing details    |      ✅       |   ❌   |   ✅    |    ❌     |
| Export billing details |      ✅       |   ❌   |   ✅    |    ❌     |

> ✅ = allowed &nbsp;&nbsp; ❌ = not allowed &nbsp;&nbsp; ⚠️ = allowed w/ conditions

#### Conditions

- Only owners may transfer organization ownership.
- Only administrators and project authors may update/delete the project.
- Members can leave their own organization.

---

## 📂 Project Structure

```
next-saas-rbac/
├── apps/
│   ├── api/
│   │   ├── prisma/
│   │   │   ├── migrations/
│   │   │   ├── schema.prisma
│   │   │   └── seed.ts
│   │   ├── src/
│   │   │   ├── http/
│   │   │   │   ├── errors/
│   │   │   │   ├── middlewares/
│   │   │   │   ├── routes/
│   │   │   │   ├── app.ts
│   │   │   │   ├── error-handler.ts
│   │   │   │   └── server.ts
│   │   │   ├── lib/
│   │   │   │   └── prisma.ts
│   │   │   └── utils/
│   │   │       ├── create-slug.ts
│   │   │       └── get-user-permissions.ts
│   │   ├── generated/
│   │   │   └── prisma/
│   │   ├── types/
│   │   │   └── fastify.d.ts
│   │   └── package.json
│   │
│   └── web/
│       ├── public/
│       ├── src/
│       │   ├── app/
│       │   │   ├── (app)/
│       │   │   ├── api/
│       │   │   ├── auth/
│       │   │   ├── invite/
│       │   │   ├── globals.css
│       │   │   ├── layout.tsx
│       │   │   └── providers.tsx
│       │   ├── auth/
│       │   ├── components/
│       │   │   ├── pending-invites/
│       │   │   ├── theme/
│       │   │   └── ui/
│       │   ├── hooks/
│       │   ├── http/
│       │   ├── lib/
│       │   └── types/
│       └── package.json
│
├── packages/
│   ├── auth/
│   │   └── src/
│   │       ├── models/
│   │       ├── subjects/
│   │       ├── index.ts
│   │       ├── permissions.ts
│   │       └── roles.ts
│   └── env/
│       ├── index.ts
│       └── package.json
│
├── config/
│   ├── eslint-config/
│   ├── prettier/
│   └── typescript-config/
│
├── docker-compose.yml
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
└── turbo.json
```

---

## 🚀 Getting Started

### 📋 Prerequisites

- 🟩 [Node.js 18+](https://nodejs.org/)
- 📦 [pnpm](https://pnpm.io/)
- 🐳 [Docker](https://www.docker.com/)

### 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/joschonarth/next-saas-rbac.git
   ```

2. Navigate into the project:

   ```bash
   cd next-saas-rbac
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

### 🔑 Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

### 🐳 Database

Start the PostgreSQL container:

```bash
docker compose up -d
```

Apply the database migrations:

```bash
pnpm --filter api db:migrate
```

Optionally seed the database with sample data:

```bash
pnpm --filter api db:seed
```

### ▶️ Running

```bash
pnpm dev
```

- Web app running at **[http://localhost:3000](http://localhost:3000)**
- API running at **[http://localhost:3333](http://localhost:3333)**

---

## 📖 API Documentation

With the API running, access the interactive Swagger docs at:

- 📚 **[http://localhost:3333/docs](http://localhost:3333/docs)**

---

## ⭐ Support

If this project was useful to you, consider leaving a ⭐ on GitHub!

---

<div align="center">

Made with ♥ by **[João Otávio Schonarth](https://github.com/joschonarth)**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joschonarth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joschonarth)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)

</div>
