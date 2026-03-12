# Backend Setup (Node.js + Express + MySQL)

## 1) Install dependencies

```bash
npm install
```

## 2) Configure environment

Copy `.env.example` to `.env` and set your MySQL values:

```bash
cp .env.example .env

# For enquiry email notifications, also configure:
# ADMIN_NOTIFICATION_EMAIL, MAIL_FROM, SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS
```

## 3) Create database tables in MySQL Workbench

Open MySQL Workbench and run the SQL in `database.sql`.

## 4) Start backend

```bash
npm run dev
```

Backend runs on `http://localhost:5000`.

## API summary

- `POST /api/auth/register` first admin registration (public only once)
- `POST /api/auth/login` admin login
- `GET /api/content/home` public home content
- `GET /api/content/services` public services content
- `GET /api/admin/content` protected full content
- `PUT /api/admin/content/:sectionKey` protected update by section
