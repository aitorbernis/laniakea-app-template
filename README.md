# bernis-app-template

[![npm version](https://img.shields.io/npm/v/bernis-app-template.svg)](https://www.npmjs.com/package/bernis-app-template) [![License](https://img.shields.io/npm/l/bernis-app-template.svg)](LICENSE)

CLI for automatic scaffolding of new full-stack projects with a modern Dockerized stack.

---

## 🚀 Features

* **Full-stack boilerplate**:

  * **Backend**: Node.js 18 + Express 5.1 + TypeScript + Prisma 6.7
  * **Frontend**: React 19.1 + Vite + Axios + Styled‑Components
  * **Admin panel**: React 19.1 + Vite + same libs as frontend
  * **Database**: MariaDB 10.9.8 with Prisma ORM
* **Dockerized** through Docker Compose (`version: '3.8'`) with four services:

  * `db` (MariaDB)
  * `backend` (Node.js)
  * `frontend` (build & serve via Nginx)
  * `admin` (build & serve via Nginx)
* **Environment management**:

  * Generates a root `.env` for Compose
  * Creates per‑service `.env` (`backend/.env`, `frontend/.env.local`, `admin/.env.local`)
* **Clean scaffolding**:

  * Ignores `node_modules` and lockfiles in the template
  * No automatic Docker or NPM commands — you run `npm install` and `docker-compose up` when ready
* **Prisma schema** with a default `Request` model (editable to your own needs)

---

## 📦 Installation

```bash
npm install -g bernis-app-template
```

Or for development:

```bash
git clone git@github.com:aitorbernis/bernis-app-template.git
cd bernis-app-template
npm link
```

---

## ⚙️ Usage

```bash
create-app-template
```

Respond to the prompts:

1. **Project name**
2. **Ports** for HTTP (frontend), Admin, Backend, and MariaDB
3. **Database credentials** (root password, name, user, password)

This generates a new folder `<project-name>/` with:

* `backend/` + `backend/Dockerfile`
* `frontend/` + `frontend/Dockerfile`
* `admin/` + `admin/Dockerfile`
* `docker-compose.yml` (parameterized)
* Root `.env` and service‑specific env files

### After scaffolding

```bash
cd <project-name>
# Install all dependencies
npm install

# Build & start services
docker-compose up -d --build

# (Optional) Open Prisma Studio to inspect the database
cd backend
npx prisma studio
```

---

## 📁 Project Structure

```
<project-name>/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── prisma/schema.prisma
│   └── src/
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
├── admin/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
├── docker-compose.yml
├── .env
└── README.md
```

---

## 🛠 Tech Stack

* **Docker Compose**: `3.8`
* **MariaDB**: `10.9.8`
* **Node.js**: `18-alpine`
* **Express**: `5.1.0`
* **TypeScript**: `5.8.3`
* **Prisma**: `6.7.0`
* **React**: `19.1.0`
* **Vite**: `6.3.5`
* **Styled‑Components**: `6.1.18`
* **Nginx**: `stable-alpine` (for serving frontends)

---

## ✍️ Customization

* **Prisma models**: Edit `backend/prisma/schema.prisma` to define your own models. The default `Request` model is just a placeholder.
* **Template files**: Swap out or extend the contents of `admin/`, `frontend/`, `backend/` as needed.
* **Docker Compose**: Adjust services, add new ones, or change versions in `docker-compose.yml`.

---

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

MIT © Aitor Bernis
