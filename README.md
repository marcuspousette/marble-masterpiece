# **Portfolio Template Documentation**

Welcome to the Portfolio Template! This project is designed to help you showcase your skills and projects in a professional and customizable way. Follow the steps below to personalize your portfolio by editing the `copy.js` file.

---

## **Table of Contents**

1. [Getting Started](#getting-started)
2. [Folder Structure](#folder-structure)
3. [Editing the copy.js File](#editing-the-copyjs-file)
   - [Hero Section](#1-hero-section)
   - [About Me Section](#2-about-me-section)
   - [Projects Section](#3-projects-section)
   - [Reviews Section](#4-reviews-section)
   - [Contact Section](#5-contact-section)
4. [Previewing Changes](#previewing-changes)

---

## **Getting Started**

1. **Request the Project**: Send an email to `marcus@techover.nu` to request the portfolio template. You will receive a `.zip` file containing the project.
2. **Unzip the File**: Extract the contents of the `.zip` file to a directory on your computer.
3. **Install Dependencies**: Navigate to the project directory and install the required dependencies:
   ```bash
   npm install
   ```
4. **Start the Development Server**: Run the following command to start the development server:
   ```bash
   npm run dev
   ```
   By default, the project will be available at `http://localhost:5173`.

---

## **Folder Structure**

The main file you'll be editing is located at:

```
/src/data/copy.js
```

This file contains all the text, images, and call-to-actions (CTAs) used across the portfolio. Each section of the portfolio corresponds to a key in the `copy.js` file.

---

## **Editing the copy.js File**

Below is a guide to editing each section of the portfolio.

### **1. Hero Section**

The hero section is the first thing visitors see on your portfolio. It contains a title, subtitle, call-to-action buttons, and key statistics.

Example snippet:

```javascript
hero: {
  title: "Smarta lösningar som driver resultat.",
  subtitle: "Jag hjälper företag att öka sin försäljning med smarta webblösningar utan att behöva investera i dyra system.",
  cta1: {
    text: "TA KONTAKT",
    callback: () => {
      window.open("https://www.linkedin.com/in/your-link", "_blank");
    },
  },
  cta2: {
    text: "SE PROJEKT",
    to: "/#projects",
  },
  statistic1: "1 000+ timmar kodat",
  statistic2: "Certifierad webbutvecklare",
},
```

#### **How to Edit:**

- **`title`**: Update this with your main headline.
- **`subtitle`**: Write a brief description of your expertise.
- **`cta1` and `cta2`**: Update the `text` and URL (or route) for the call-to-action buttons.
- **`statistic1` and `statistic2`**: Replace with key personal statistics (e.g., projects completed, certifications earned).

---

### **2. About Me Section**

Introduce yourself and your professional background here.

Example snippet:

```javascript
aboutMe: {
  title: "Your Name",
  subtitle: "Write a brief professional introduction here.",
  cta: {
    text: "TA KONTAKT",
    callback: () => {
      window.open("https://www.linkedin.com/in/your-link", "_blank");
    },
  },
  statistics: [
    { statistic: "1 000+", text: "Timmar kodat" },
    { statistic: "20+", text: "Projekt byggda" },
  ],
  profilePicture: macHero, // Replace with your profile picture
},
```

#### **How to Edit:**

- **`title`**: Replace with your name.
- **`subtitle`**: Write a short bio.
- **`cta`**: Update the `text` and LinkedIn URL.
- **`statistics`**: Update the key statistics about your career.
- **`profilePicture`**: Replace `macHero` with the path to your own profile picture.

---

### **3. Projects Section**

Showcase your best projects with images, descriptions, and links.

Example snippet:

```javascript
projects: [
  {
    img: spotifyClone, // Replace with your project image
    title: "Spotify Klon",
    listOfTechStack: ["React", "Node", "API"],
    description: "A web app for visualizing personalized Spotify data...",
    links: [
      { Icon: GitHubIcon, href: "https://github.com/your-repo" },
      { Icon: OpenInNewIcon, href: "https://your-project-link" },
    ],
    rightAlign: true,
  },
],
```

#### **How to Edit:**

- **`img`**: Replace with the path to your project image.
- **`title`**: Name of your project.
- **`listOfTechStack`**: List the technologies used.
- **`description`**: Write a short summary of the project.
- **`links`**: Update the GitHub and live project links.

---

### **4. Reviews Section**

Show reviews or testimonials from clients or colleagues.

Example snippet:

```javascript
reviews: [
  {
    author: "John Doe",
    reviewText: "Marcus's expertise in page speed optimization has greatly improved our website's performance...",
    img: macHero, // Replace with the reviewer's photo
    title: "Head of Cool Stuff",
  },
],
```

#### **How to Edit:**

- **`author`**: Replace with the reviewer’s name.
- **`reviewText`**: Add their testimonial.
- **`img`**: Replace with their photo or an avatar.
- **`title`**: Include their position or title.

---

### **5. Contact Section**

Provide visitors with a way to contact you.

Example snippet:

```javascript
contact: {
  title: "Nå ut till mig på LinkedIn!",
  subtitle: "Vill du samarbeta eller veta mer om mina projekt? Kontakta mig gärna på LinkedIn.",
  cta: {
    text: "TA KONTAKT",
    callback: () =>
      window.open("https://www.linkedin.com/in/your-link", "_blank"),
  },
},
```

#### **How to Edit:**

- **`title`**: Update with your preferred contact method.
- **`subtitle`**: Add a short message encouraging people to contact you.
- **`cta`**: Update the LinkedIn or contact link.

---

## **Previewing Changes**

After updating the `copy.js` file:

1. Save your changes.
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173` to see the changes.

---

This template makes it easy for you to present your skills and projects professionally. If you have any issues or questions, feel free to contact the support team.

Happy coding!

// Your biggest fan Marcus Pousette
