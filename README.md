<<<<<<< HEAD

## Setup

### Backend
1. `cd backend`
2. `cp env.example .env` and fill in values
3. `npm install`
4. `npm start`

### Frontend
1. `cd frontend`
2. `cp .env.example .env` and fill in values
3. `npm install`
4. `npm run dev`

## Features
- Auth (Sign Up, Sign In, etc.)
- Blog CRUD
- News
- File Management

## Environment Variables
- See `.env.example` in each folder.
=======
### ✅ `README.md`

# RUNACOSS Fullstack Platform
This is a fullstack web application built for the Redeemer's University Association of Computer Science Students (RUNACOSS). It features a React frontend and a Node.js + Express backend, organized in a monorepo.


## 📁 Project Structure

project/
├── client/       # React + Vite frontend
├── server/       # Express.js backend with MongoDB
└── README.md



## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd project
```


### 2. Install Dependencies
```bash
cd client
npm install

cd ../server
npm install
```

### 3. Configure Environment
Create a `.env` file inside the `server/` folder using `.env.example` as a guide.

```env
PORT=5000
MONGODB_URI=your-mongo-uri
JWT_SECRET=your-secret-key
CLIENT_URL=http://localhost:5173
```


## 💻 Running the App
In the project root, run:
```bash
npm install concurrently --save-dev
npm run dev
```
This will start both the backend (on `localhost:5000`) and frontend (on `localhost:5173`) concurrently.


## 🔗 API Proxy (Frontend → Backend)
React's `client/package.json` has a proxy set:

```json
"proxy": "http://localhost:5000"
```

This allows frontend to make API requests



## 🛠️ Tech Stack

* **Frontend:** React, Vite, Tailwind CSS
* **Backend:** Node.js, Express, MongoDB
* **Auth:** JWT, OAuth (Google)
* **Dev Tools:** Nodemon, Concurrently



## 👩‍💻 Authors
* **Ifeoluwa Dorcas (Script)**
GitHub: [@IfeoluwaDorcas](https://github.com/IfeoluwaDorcas)

* **Ola Israel**
GitHub: [@OlaIsraelI](https://github.com/OlaIsraelI)

* **Iyere Likeness**
GitHub: [@Likeness01](https://github.com/Likeness01)

* **Olaoluwa Obisakin**
GitHub: [@olaoluwapy](https://github.com/olaoluwapy)




## 📄 License
MIT License. See `LICENSE` for details.
>>>>>>> runacoss/main
