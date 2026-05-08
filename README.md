# Student Profile Directory

A React application that displays a directory of student profiles using reusable components, props, conditional rendering, and state management.

## Overview

This project demonstrates a simple student directory app built with React. The app renders a list of student cards from an array, shows each student's status, and allows toggling active/inactive status with a button.

## Features

- Displays 6 unique student profiles
- Reusable component structure: `Header`, `ProfileList`, `ProfileCard`, and `Footer`
- Data is passed via props and rendered dynamically with `map()`
- Conditional rendering for Active / Inactive status
- Uses React `useState` to manage student data and update UI
- Responsive card layout with clean styling

## Component Structure

- `src/App.js` - main app component with state and student data
- `src/components/Header.js` - application title and subtitle
- `src/components/ProfileList.js` - renders `ProfileCard` components from student data
- `src/components/ProfileCard.js` - shows student details and toggle button
- `src/components/Footer.js` - displays the total number of students

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Build for production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## How it works

- Students are stored in an array inside `App.js`.
- `App` uses `useState` to manage the students list.
- `ProfileList` receives the array as props and renders a `ProfileCard` for each student.
- `ProfileCard` shows student properties and renders Active/Inactive using conditional JSX.
- Clicking the button calls the `toggleActive` function passed from `App`.

## Student Data

Each student object includes:

- `id`
- `name`
- `track`
- `bio`
- `skillLevel`
- `isActive`

## Notes

- The app is built with React 19 and Create React App.
- Styling is contained in `src/App.css` for a simple, polished interface.
- No backend or external APIs are required.

## Learn More

For more information on React, visit the [React documentation](https://reactjs.org/).
