## Next-Firebase-Blog-App

    This project is a Next.js application for managing personal blogs. It uses Firebase for backend functionalities like storing and retrieving blog data. Below is an overview of the project structure and key components.

## Project Structure
    pages folder: Contains Next.js pages and route handlers.
    page.js: The main landing page displaying a list of blogs and an option to add a new blog.
    add-blog/page.js: Page to add a new blog.
    blog/[id].js: Page to view details of a specific blog.
    components folder: Contains React components used throughout the application.
    BlogCard.js: Displays individual blog cards with options to view details or delete.
    BlogForm.js: Form component to add a new blog.
    BlogDetail.js: Displays detailed information about a specific blog.
    firebase.js: Firebase configuration and initialization.
    globals.css: Contains CSS styles for the application.

## Key Components

## Home Page (page.js)
    The main landing page displaying a list of personal blogs. It uses the BlogCard component to show blog cards and allows adding new blogs.

## Blog Card (components/BlogCard.js)
    Displays individual blog cards showing title, date, author, and an image. It provides options to view details or delete a blog.

## Adding a Blog (add-blog/page.js)
    Page to add a new blog. It uses the BlogForm component to capture blog details and add them to the database.

## Viewing Blog Details (pages/blog/[id]/page.js)
    Displays detailed information about a specific blog using the BlogDetail component.

## Firebase Configuration (firebase.js)
    Contains Firebase configuration and initialization using Firebase SDKs. This allows the application to interact with Firebase services like Firestore.

## Setup
    Clone the repository.
    Install dependencies using npm install.
    Set up Firebase and replace the Firebase configuration in firebase.js with your Firebase project configuration.
    Run the application using npm run dev.
