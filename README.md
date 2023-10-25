# Walmart Online Assessment - Ricky And Morty App

Welcome to the Rick And Morty project, an online assessment for Walmart. This project utilizes some of the best practices in modern web development to ensure performance, scalability, and maintainability.

## 🛠️ Technologies Used

<p align="left">
<img src="https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Badge" />
<img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" />
<img src="https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge" />
</p>

## 📌 Requirements

- **NodeJS**: This project runs on Node.js LTS (Hydrogen) v18.16.1. Ensure you have this version or later before running the application.

## ⚙️ Core Features

- **Server Side Rendering (SSR)**: This project takes advantage of Next.js's SSR capability to provide near-instant initial page loads and improved SEO.
- **Homepage**: The main landing page `/` showcases an introduction and a "View Characters" link that navigates users to the characters page.
- **Episode** : This page utilizes a query string to display the characters based on the episode Id. E.g., `/?episodeId=2`.

## 🚀 Deployment

The project is deployed on **Vercel**, a platform built to serve Next.js applications in an optimal manner. You can visit the live project [here](https://walmart-asessment.vercel.app/).

## 🏃 Local Development

### Development Mode

```bash
npm run dev
```

### Production Mode

1. Build the project:

```bash
npm run build
```

2. Start the production server:

```bash
npm run start
```

## 🙏 Special Thanks

A huge shoutout to Rick and Morty API for providing the data used in this project.
