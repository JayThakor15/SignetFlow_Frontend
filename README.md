✨ SignetFlow Frontend
A modern React-based frontend for SignetFlow, the all-in-one e-signature platform.

Easily upload, preview, sign, and share PDFs digitally, with smooth UI and robust authentication.

Built with React, Tailwind CSS, react-pdf, Axios, Framer Motion.

🚀 Features
<<<<<<< HEAD
✅ User registration and login with JWT
✅ Upload PDF documents securely
✅ Preview PDFs with react-pdf
✅ Place signatures with drag-and-drop, custom fonts, (x,y) positions
✅ Font selection for personalized signatures
✅ Signature status: Pending, Signed, Rejected
✅ Audit trail viewing for signer, timestamp, IP
✅ Email signed documents directly
✅ Responsive and modern UI
✅ Works seamlessly with Render/Netlify/MongoDB Atlas

📂 Project Structure
signetflow-frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
│
└── src/
    ├── App.jsx
    ├── main.jsx
    │
    ├── /components
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── (other shared components)
    │
    ├── /pages
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   ├── Home.jsx
    │   ├── Upload.jsx
    │   ├── MyDocuments.jsx
    │   ├── Preview.jsx
    │   └── SignedDocuments.jsx
    │
    ├── /context
    │   └── AuthContext.js
    │
    └── /utils
        └── api.js

⚙️ Installation
1️⃣ Clone the repo
git clone https://github.com/JayThakor15/Signetflow-Frontend.git
cd signetflow-frontend

2️⃣ Install dependencies
npm install

3️⃣ Set up environment variables
Create a .env file in the root directory.
Add VITE_API_URL with your backend API URL. and pass it to utils > api.js
✅ For production:

VITE_API_URL=https://signetflow-backend.onrender.com/api
Add VITE_API_URL in utils > api.js

🏃‍♂️ Running Locally
npm run dev
✅ Opens on

http://localhost:5173
=======

✅ User registration and login with JWT

✅ Upload PDF documents securely

✅ Preview PDFs with react-pdf

✅ Place signatures with drag-and-drop, custom fonts, (x,y) positions

✅ Font selection for personalized signatures

✅ Signature status: Pending, Signed, Rejected

✅ Audit trail viewing for signer, timestamp, IP

✅ Email signed documents directly

✅ Responsive and modern UI

✅ Works seamlessly with Render/Netlify/MongoDB Atlas


📂 Project Structure
 /signetflow-frontend 
 
 ├── /src 

 │ ├── /components │ 
 
 │ ├── Navbar.jsx │
 
 │ ├── Footer.jsx │ 
 
 │ └── (other shared components) │
 
 ├── /pages │
 
 │ ├── Login.jsx │
 
 │ ├── Register.jsx 
 
 │ │ ├── Home.jsx │
 
 │ ├── Upload.jsx │
 
 │ ├── MyDocuments.jsx │
 
 │ ├── Preview.jsx │
 
 │ └── SignedDocuments.jsx │
 
 ├── /utils │
 
 │ └── api.js # Axios instance with baseURL │
 
 ├── /context │
 
 │ └── AuthContext.js # Global auth state │
 
 ├── App.jsx │
 
 └── main.jsx 
 
 ├── public │
 
 ├── index.html │
 
 └── favicon.ico 
 
 └── package.json


⚙️ Installation

1️⃣ Clone the repo

git clone https://github.com/JayThakor/Signetflow-Frontend.git

cd signetflow-frontend


2️⃣ Install dependencies

npm install

Than add your backend url into utils > api 

http://localhost:5000/api


✅ For production:

For peoduction we can replace your local server link to deployed backend link in util > api.js

https://signetflow-backend.onrender.com/api


🏃‍♂️ Running Locally

npm run dev


✅ Opens on


http://localhost:5173


🔗 Example API Connections

Login/Register: /auth/login

Upload document: /docs/upload

Fetch docs: /docs

Place signature: /signature/place

Finalize signed PDF: /signature/finalize

Send Email: /share/send



🌟 Pages & Routes

✅ /register – User signup

✅ /login – User login

✅ /home – Dashboard, upload new PDF

✅ /my-documents – View uploaded PDFs

✅ /preview/:id – Preview and sign PDF

✅ /signed-documents – List of signed PDFs with email share



💻 Technologies Used

✅ React

✅ Vite

✅ Tailwind CSS

✅ Axios

✅ React Router

✅ react-pdf

✅ Framer Motion

✅ Lucide Icons



🌐 Deployment

✅ Netlify recommended for frontend

✅ Render for backend

✅ MongoDB Atlas for database



❤️ Contributions

✅ Fork, Star, Submit PRs!

✅ Open issues to suggest features or report bugs.

>>>>>>> aa0b13ab4b2d24218e41370af99ccddd12a596b6

🔗 Example API Connections
Login/Register: /auth/login

Upload document: /docs/upload

Fetch docs: /docs

Place signature: /signature/place

Finalize signed PDF: /signature/finalize

Send Email: /share/send

🌟 Pages & Routes
✅ /register – User signup
✅ /login – User login
✅ /home – Dashboard, upload new PDF
✅ /my-documents – View uploaded PDFs
✅ /preview/:id – Preview and sign PDF
✅ /signed-documents – List of signed PDFs with email share

💻 Technologies Used
✅ React
✅ Vite
✅ Tailwind CSS
✅ Axios
✅ React Router
✅ react-pdf
✅ Framer Motion
✅ Lucide Icons

🌐 Deployment
✅ Netlify recommended for frontend
✅ Render for backend
✅ MongoDB Atlas for database

Example production .env:

VITE_API_URL=https://signetflow-backend.onrender.com/api

❤️ Contributions
✅ Fork, Star, Submit PRs!
✅ Open issues to suggest features or report bugs.

📜 License
<<<<<<< HEAD
MIT License – Free to use, modify, share.
=======

MIT License – Free to use, modify, share.
>>>>>>> aa0b13ab4b2d24218e41370af99ccddd12a596b6
