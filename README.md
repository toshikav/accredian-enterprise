# Accredian Enterprise — Partial Clone

A responsive enterprise learning and capability platform built with **Next.js**, **TypeScript**, and **Tailwind CSS** as part of the Full Stack Developer Intern assignment.

## 🔗 Live Demo

**Vercel:** https://accredian-enterprise-beige-iota.vercel.app/

**GitHub:** https://github.com/toshikav/accredian-enterprise

---

## 📌 Project Overview

This project recreates the Accredian Enterprise landing page experience with a focus on:

* Clean and responsive UI
* Reusable React components
* Smooth navigation between sections
* Interactive program categories
* Lead capture functionality
* Next.js API integration
* Mobile and desktop responsiveness

The implementation focuses on the structure, user experience, and functionality of an enterprise learning platform rather than copying the original website pixel-for-pixel.

---

## ✨ Features

### Landing Page

* Responsive navigation bar
* Hero section with primary CTAs
* Enterprise learning solutions
* Expertise/capability sections
* Interactive learner programs
* Learning process section
* Testimonials
* FAQ section
* Contact/lead capture section
* Responsive footer

### Interactive Programs

The Programs section allows users to switch between:

* Leaders
* Teams
* Emerging Talent

The displayed content updates dynamically using React state.

### Lead Capture API

The contact form collects:

* Full name
* Work email
* Company
* Phone number
* Requirement

Form submissions are sent to:

```text
POST /api/leads
```

The API performs server-side validation and returns an appropriate response for valid and invalid submissions.

For this prototype, lead storage is mocked rather than connected to an external database.

---

## 🛠️ Tech Stack

* **Next.js 16**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Next.js App Router**
* **Next.js API Routes**
* **Vercel**
* **Git & GitHub**

---

## 📂 Project Structure

```text
accredian-enterprise/
│
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Programs.tsx
│   ├── Contact.tsx
│   ├── LeadForm.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   └── ...
│
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

### Clone the repository

```bash
git clone https://github.com/toshikav/accredian-enterprise.git
```

### Navigate into the project

```bash
cd accredian-enterprise
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To run the production server:

```bash
npm start
```

The project has been tested successfully using the production build.

---

## 🧩 Approach Taken

The page was developed using a component-based architecture.

Instead of putting the entire landing page into one component, individual sections were separated into reusable React components.

Examples include:

* `Navbar`
* `Hero`
* `Programs`
* `Contact`
* `LeadForm`
* `FAQ`
* `Footer`

Tailwind CSS was used for responsive styling and layout.

For interactive functionality, React state and event handlers were used where appropriate.

The application follows the Next.js App Router structure and uses a server-side API route for lead submission.

---

## 🤖 AI Usage

AI tools were used during development as development assistance, particularly for:

* Planning the component structure
* Brainstorming UI layouts and section organization
* Reviewing and debugging React/Next.js code
* Improving responsive Tailwind CSS classes
* Debugging API and form integration
* Reviewing errors during development
* Improving README documentation

### Manual Improvements

The generated suggestions were not used blindly. The implementation was manually reviewed and modified to:

* Match the intended enterprise design direction
* Adjust spacing, typography, and responsive behavior
* Customize the content and section structure
* Improve component organization
* Fix implementation and TypeScript issues
* Test the application locally
* Test the production build
* Verify the lead capture API
* Deploy and verify the final application on Vercel

AI was used as a development assistant, while the final implementation, testing, debugging, and project decisions were manually reviewed.

---

## 🔌 API Integration

The project includes a Next.js API route:

```text
POST /api/leads
```

The endpoint:

1. Receives form data
2. Parses the request body
3. Validates required fields
4. Creates a mock lead object
5. Returns a success response

Example response:

```json
{
  "message": "Lead submitted successfully.",
  "lead": {
    "id": "generated-id",
    "name": "Toshika"
  }
}
```

For a production application, the mock storage can be replaced with a persistent database such as PostgreSQL, MongoDB, or Supabase.

---

## 📱 Responsive Design

The interface was designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

Tailwind responsive utilities were used to adapt layouts, typography, grids, navigation, and spacing across screen sizes.

---

## 🔮 Improvements With More Time

If this project were developed further, I would add:

* Persistent database storage for leads
* Email notifications after lead submission
* Stronger form validation
* Loading and error states with improved UX
* CMS-driven content
* Analytics and conversion tracking
* More detailed accessibility testing
* Automated unit and integration tests
* More advanced animations and transitions
* SEO and Open Graph optimization
* Admin dashboard for managing submitted leads

---

## 👩‍💻 Author

**Toshika Verma**

GitHub: https://github.com/toshikav

LinkedIn: https://www.linkedin.com/in/toshika-v/

---

## 📄 Assignment

Developed as part of the **Full Stack Developer Intern — Accredian Enterprise Page** assignment.
