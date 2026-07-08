# 🤖 AI-Powered CSV Importer

An AI-powered CSV Importer built as part of the GrowEasy Software Developer Assignment.

The application intelligently imports CSV files with different column names, layouts, and structures, then uses Google Gemini AI to map them into the GrowEasy CRM format.

---

## 🚀 Live Demo

### Frontend

> https://groweasy-assignment-fe.vercel.app/

### Backend

> https://groweasy-assignment-be.onrender.com

---

## 📷 Screenshots

### Upload CSV

![alt text](image.png)

---

### CSV Preview

![alt text](image-1.png)

---

### AI Parsed CRM Results

![alt text](image-2.png)

---

## ✨ Features

### Frontend

- Upload CSV files
- Drag & Drop upload
- CSV Preview
- Responsive Table
- Horizontal Scroll
- Vertical Scroll
- Sticky Table Header
- Import Statistics
- Loading Overlay
- Progress Indicator
- Success & Error Toasts

### Backend

- REST API
- CSV Parsing
- Batch Processing
- Google Gemini AI Integration
- Intelligent CRM Field Mapping
- AI Validation Layer
- Structured JSON Response

---

## 🧠 AI Features

The application intelligently understands different CSV formats.

Example:

CSV A

| Customer | Mail ID | Phone |
|-----------|----------|--------|

↓

CSV B

| Lead Name | Email Address | Contact |

↓

Both become

| name | email | mobile_without_country_code |

The AI automatically identifies fields without relying on fixed column names.

---

## 📋 Supported CRM Fields

- created_at
- name
- email
- country_code
- mobile_without_country_code
- company
- city
- state
- country
- lead_owner
- crm_status
- crm_note
- data_source
- possession_time
- description

---

## 🛠 Tech Stack

### Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Dropzone
- Axios
- Papa Parse
- Sonner

### Backend

- Node.js
- Express
- TypeScript
- Multer
- Papa Parse
- Google Gemini API

---

## 📂 Project Structure

```
groweasy-ai-importer

├── frontend
│   ├── app
│   ├── components
│   ├── lib
│   ├── services
│   └── types
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── ai
│   ├── utils
│   ├── middleware
│   └── types
```

---

## ⚙️ Installation

Clone the repository: both frontend and backend

```bash
git clone https://github.com/AdityaDeolalikar/groweasy-assignment-fe.git
git clone https://github.com/AdityaDeolalikar/groweasy-assignment-be.git
```

Move into the project

```bash
cd groweasy-ai-importer
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Runs on

```
http://localhost:3000
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

Runs on

```
http://localhost:5000
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

## API

### Upload CSV

```
POST /api/import
```

Request

```
multipart/form-data
```

Field

```
file
```

Response

```json
{
  "success": true,
  "imported": 5,
  "skipped": 0,
  "crmRecords": []
}
```

---

## Workflow

```
Upload CSV

↓

Preview CSV

↓

Confirm Import

↓

Backend

↓

Parse CSV

↓

Batch Processing

↓

Gemini AI

↓

CRM Extraction

↓

Validation

↓

Frontend Result Table
```

---

## AI Processing

The application uses Google Gemini to:

- Detect different column names
- Map fields intelligently
- Extract CRM records
- Skip invalid records
- Validate AI output
- Return structured JSON

---

## Assignment Requirements Covered

- CSV Upload
- Drag & Drop Upload
- CSV Preview
- Responsive Table
- Sticky Headers
- Backend API
- AI Field Extraction
- Intelligent Column Mapping
- Batch Processing
- Structured JSON Response
- Import Statistics
- Error Handling
- Loading State
- Progress Indicator

---

## Future Improvements

- Retry Failed AI Batches
- Virtualized Tables
- Dark Mode
- Docker Support
- Unit Testing
- Search & Filter
- Pagination

---

## Author

**Aditya Deolalikar**

GitHub

https://github.com/AdityaDeolalikar

LinkedIn

https://www.linkedin.com/in/aditya-deolalikar/