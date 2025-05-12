# 📝 MERN Blog Application

A full-featured **Blog Application** built using the **MERN Stack** (MongoDB, Express, React, Node.js) with:

- 🔐 JWT-based Authentication
- ☁️ Cloudinary for Image Uploads
- ⚡ Vite for blazing-fast React development
- 🎯 REST API with Express and MongoDB

## 📚 Tech Stack

| Frontend     | Backend            | Other Integrations |
| ------------ | ------------------ | ------------------ |
| React (Vite) | Node.js, Express   | Cloudinary, JWT    |
| Axios        | MongoDB (Mongoose) | Bcrypt, dotenv     |
| Tailwind/CSS |                    |                    |

## 🚀 Getting Started

### 1. Clone the repository

    git clone https://github.com/your-username/blog-app-mern.git
    cd blog-app-mern

# .ENV configuration

    PORT=5041
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloudinary_name
    COUDINARY_API_KEY=your_api_key
    COULDINARY_SECRET_KEY=your_api_secret

# set up back-end

    cd /backend
    npm install
    npm start

# set up front-end

    cd /frontend
    npm install
    npm run dev

Features
User Registration & Login (JWT Auth)

Create, Read, Update, Delete (CRUD) Blog Posts

Upload Images to Cloudinary

Authenticated Routes for Create/Edit/Delete

Responsive UI for all devices
