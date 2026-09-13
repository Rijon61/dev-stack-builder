
# 💡 Dev-Stack-Builder

Dev-Stack-Builder is a beginner-friendly web application that helps developers explore different technologies and build their own development stack.


## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- JSON API
- React Icons (NPM Package)
- React-Toastify (NPM Package)

## ✨ Features

- 🔍 **Explore Technologies** – Explore different technologies and learn about their category, difficulty, rating, and description Etc.

- ➕ **Add to Stack** – Add your  technologies to create your own personalized development stack..
- 👉🏻🗑️ **Remove Technologies** – Easily remove technologies from your stack or clear the entire stack.

## ▶🚀 How to Run

```bash
npm install
npm run dev

## 🌐 Live Website

[Visit Dev-Stack-Builder](https://devstack-explorer.netlify.app/)


---


### 1. What is JSX and why is it used in React?

JSX is a syntax for React that looks like HTML syntax. It helps in easily creating React UI.

### 2. What is the difference between Props and State?

**Props:** It is used to pass data from a parent component to a child component.
**State:** It is used to store and modify the component's data.

### 3. What is the useState hook and where did you use it in this project?

The `useState` hook is used to store and modify mutable data in a React component.
In the **Dev-Stack-Builder** project, I used `useState` to store the list of selected technologies.

### 4.What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component.
I used it to fetch and load the JSON data when the component renders.

### 5.Why does every item in a .map() list need a unique key prop?

When rendering a list using `.map()`, a unique key is required for each item so that React can identify each item individually and update the correct one when changes occur.


