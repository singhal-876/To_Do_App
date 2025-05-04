# To-Do App
A simple and intuitive **To-Do App** built with React. This app allows users to add, view, and delete tasks, helping them manage their daily activities efficiently.

---

# Features
- Add new to-do items with a title and description.
- View the list of to-do items.
- Delete to-do items when they are completed or no longer needed.
- Persistent storage using local storage to save to-do items.
- Navigation between **"Home"** and **"About"** pages.
- Responsive design for a seamless user experience.

---

# Installation
- To run this project locally, follow these steps:
1. **Clone the repository:**
```
git clone https://github.com/yourusername/todo-list-app.git
```
2. **Navigate to the project directory:**
```
cd todo-list-app
```
3. **Install dependencies:**
```
npm install
```
4. **Start the development server:**
```
npm start
```
5. **Open your browser and visit:**
```
http://localhost:3000
```

---

# Usage

## Adding a To-Do:
- Navigate to the **"Home"** page.
- Fill in the **"Title"** and **"Description"** fields in the **"Add a ToDo"** section.
- Click the **"Submit"** button to add the to-do item to the list.

## Viewing To-Dos:
- The list of to-do items is displayed below the **"Add a ToDo"** section on the **"Home"** page.

## Deleting a To-Do:
- Each to-do item has a **"Delete"** button.
- Click the **"Delete"** button to remove the to-do item from the list.

---

# About Page:
- Click on the **"About"** link in the navigation bar to learn more about the app.

---

# Components
- **Header.js:** Displays the navigation bar with links to **"Home"** and **"About"**. It can optionally include a search bar.
- **AddToDo.js:** Provides a form to add new to-do items.
- **ToDos.js:** Renders the list of to-do items and handles deletion.
- **ToDoItem.js:** Represents an individual to-do item with a delete button.
- **Footer.js:** Shows footer information including copyright, developer name, and contact details.
- **About.js:** Contains information about the app.
- **App.js:** Manages the state of to-do items, handles adding and deleting, and sets up routing.
- **index.js:** The entry point that renders the **App** component.

---

# index.html
The **index.html** file is the main HTML file for the To-Do List App. It serves as the entry point for the React application and is responsible for loading the necessary resources and rendering the app in the browser.

## Key Components
- **Meta Tags:** Includes meta tags for character encoding, viewport settings, and a description of the app.
- **Favicon:** Links to a favicon **(check.png)** that appears in the browser tab.
- **Bootstrap CSS:** Imports Bootstrap 5.3.5 for styling the application.
- **Title:** Sets the page title to "To Dos List App."
- **Noscript Tag:** Informs users that JavaScript is required to run the app.
- **Root Div:** Provides a ```<div id="root"></div>``` where the React application is mounted.
- **Bootstrap JavaScript:** Loads Bootstrap's JavaScript bundle for interactive components.
- **Cloudflare Script:** Includes an inline script for Cloudflare's challenge platform, which enhances security by protecting against bots and malicious traffic.

This file ensures that the application is properly set up in the browser, providing the foundation for the React components to render and function correctly.

---

# Routing
The app uses React Router for navigation:
- **/:** Home page with the to-do list and add form.
- **/about:** About page with information about the app.

---

# Local Storage
To-do items are stored in the browser's local storage to persist data between sessions. The **TodosWork** state is saved and loaded from local storage using **localStorage.setItem** and **localStorage.getItem**.

---

# Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (**git checkout -b feature-branch**).
3. Make your changes and commit them (**git commit -m 'Add some feature'**).
4. Push to the branch (**git push origin feature-branch**).
5. Open a pull request.

---

# License
This project is licensed under the MIT License. See the LICENSE file for details.

---

# Contact
For any inquiries or feedback, please contact:
- **Developer:** Abhinav Singhal
- **Email:** abhinavsinghal876@gmail.com