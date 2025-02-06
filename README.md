# Notefy - Stationery Shop

## Live Demo

[Click here to view the live application](https://notefy-six.vercel.app/)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

## Project Overview

The Stationery Shop is a web-based e-commerce platform that allows users to browse, search, and purchase stationery products. The application features secure authentication, an intuitive shopping cart system, and a robust admin dashboard for managing products and orders.

## Features

### Public Routes

#### Home Page

- The home page is designed to engage users with an attractive **banner** showcasing special offers and promotions.
- A **product carousel ** highlights top-selling items dynamically.
- **Featured products** are displayed with a “View All” button, allowing users to explore the complete product catalog.
- **Testimonials and blogs** are included to build trust and keep users informed.
- A **footer section** provides essential links, social media icons, and store contact details.

#### All Products Page

- Users can **search for products** by title, author, or category for quick navigation.
- Multiple **filter options** are available, including price range, category, and availability, to refine search results.
- Products update **dynamically** based on search terms and applied filters.
- Each product card includes the **product name, price, category**, and a **“View Details” button** leading to the product details page.

#### Product Details Page

- Displays **detailed product information**, including multiple images, descriptions, price, and stock availability.
- Users can **add the product to their cart** directly from this page for a smooth shopping experience.

#### About Page

- Provides insights into the store’s **mission, values, and history** to establish brand identity.

---

### Private Routes

#### Cart Page

- Users can **manage their cart** by adding or removing products.
- The system ensures that **ordered quantities do not exceed available stock** to prevent overselling.
- The cart page displays **product details, user details, and total price calculations** dynamically.
- An **“Order Now” button** allows users to confirm and proceed with purchases.

#### User Dashboard

- Users can view their **order history** and track the **status of each order** (e.g., Pending, Shipped, Delivered).
- Profile management includes options to **update default shipping addresses** for convenience.

#### Admin Dashboard

- Admins can **manage users**, including **activating or deactivating accounts** as needed.
- Full **CRUD (Create, Read, Update, Delete) functionality** is available for managing products.
- **Orders can be managed**, including updating their status from **Pending** to **Shipped** or **Delivered**.

#### Authentication System

- Users can **securely register and log in** using JWT-based authentication.
- Upon registration, users are assigned **default roles** (e.g., customer, admin) to restrict access appropriately.
- **Passwords are securely stored** using hashing algorithms for enhanced security.
- The **logout feature** ensures session security by removing stored tokens.

#### Access Token & Refresh Token Authentication (New Feature)

- Implemented **access token and refresh token** for better security and authentication.
- Upon login, users receive an **access token** (short-lived) and a **refresh token** (long-lived).
- The **access token is used for API requests**, while the **refresh token helps generate a new access token** when the old one expires.
- This system **enhances security** while ensuring a smooth user experience without frequent logins.

#### Payment Integration

- Integrated **SurjoPay, Stripe, or other payment gateways** for secure online transactions.

#### Review & Rating System

- Users can **leave reviews and rate products** based on their experience.
- Each review includes **text feedback and a star rating system** to help future buyers.
- Users have full control over their reviews, allowing them to **update or delete** their own feedback as needed.

## Technology Stack

- React.js
- React Router DOM
- Tailwind CSS
- Redux Toolkit
- Framer Motion
- React Icons
- Swiper.js
- Shadcn Ui
- Typscript

## Installation

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Steps to Set Up the Project Locally

#### **1. Clone the Repository**

```bash
https://github.com/Arnab-Gupta11/Stationery-Shop-Server.git
cd Stationary-shop-client
```

#### **2. Install Dependencies**

```bash
npm install
```

#### **3. Start the development server**

```bash
npm run dev
```

## ✨ **Contact**

For questions or collaboration, feel free to reach out via email at [arnab.gupta.011@gmail.com](mailto:arnab.gupta.011@gmail.com).
