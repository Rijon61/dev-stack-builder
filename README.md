
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

### 6.What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means displaying different UI elements based on a condition.
In the **Dev-Stack-Builder** project, I used it to show an empty stack message when no technology is selected.

```Code 
{selectedTechnology.length > 0 ? (
  <div>
    {/* Selected technologies */}
  </div>
) : (
  <p>Your stack is empty.</p>
)}
```
### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?


Parent → Child: Data is passed using props.
Child → Parent: A function prop is passed from the Parent to the Child. The Child can send data to the Parent by calling that function.

```Code
Parent → Child :
<TechnologyCard
  technologyCard={technologyCard}
  key={technologyCard.id}
  handleAddToStack={handleAddToStack}
  selected={selectedTechnology.some(
    (tech) => tech.id === technologyCard.id
  )}
/>

Child → Parent :

 Step-1 :The `handleAddToStack()` function is called when the button is clicked.

<button onClick={() => handleAddToStack(technologyCard)}>
  Add to Stack
</button>

Step-2 : The child data is passed via the parent's `handleAddToStack` function.

const handleAddToStack = (technology: TechnologyType): void => {
  setSelectedTechnology([...selectedTechnology, technology]);
};

```

## ❓ Common FAQ

### 1. Where can we deploy the site?

We can deploy the site on any hosting platform. For example, Netlify, Vercel, or Render etc.
I deployed my project on **Netlify**.

### 2. Do we have to use TypeScript?

No. We can use TypeScript or JavaScript.
I have used **TypeScript** in my project.

### 3.Can we change the title, logo, and colors?

Yes. You can change the project title, logo, and colors according to your project.
I customized the title, logo, and color scheme to match my **Dev-Stack-Builder** project.

### 4.Where do we get the technology logos/icons?

we can obtain technology logos or icon from different website.
I used technology logo/icon URLs in my JSON data.


