# Personal Portfolio Website

## Project Overview
This project is a personal portfolio website designed to showcase personal information, skills, projects, resume details, and contact information. The objective is to create a clean, user-friendly, visually appealing, and well-structured web page using HTML5, semantic elements, CSS, and JavaScript.

---

## Project Objectives
- Showcase personal and professional details  
- Demonstrate understanding of HTML5, semantic tags, CSS, and JavaScript  
- Implement internal navigation  
- Create a validated contact form  
- Apply CSS styling for layout, animations, and responsiveness  
- Add JavaScript-based interactivity and dynamic content  
- Organize content in a structured and accessible manner  

---

## Technologies Used
- HTML5  
- CSS3  
- JavaScript  
- Font Awesome (icons)  
- Google Fonts  
- Browser-based form validation  

---

## Setup Instructions
1. Download or clone the repository  
2. Open the project folder  
3. Ensure all images are placed inside the `images/` folder  
4. Ensure `style.css` and `script.js` are present in the root directory  
5. Open `index.html` in any modern web browser  
6. No additional installation or configuration is required  

---

## Code Structure
- `index.html` contains the complete website structure  
- `style.css` contains all styling, layout, animations, and responsive design  
- `script.js` contains JavaScript logic for form validation and interactivity  
- `images/` folder stores profile and project images  
- `screenshots/` folder stores screenshots of results and testing  
- Semantic HTML tags improve readability and accessibility  
- Internal navigation links connect different sections  

---

## Website Sections
- **Home:** Profile image, one-line introduction, dynamic greeting, social links, and CV download  
- **About:** About me and skills list  
- **Projects:** Project descriptions with images and hover effects  
- **Resume:** Education, Experience, and Certifications displayed in styled boxes  
- **Contact:** Contact details and validated contact form  

---

## HTML Concepts Learned
- HTML5 structure using `<!DOCTYPE html>`, `<head>`, and `<body>`  
- Semantic elements: `header`, `nav`, `main`, `section`, `article`, `footer`  
- Forms and validation using `input`, `textarea`, `required`, `pattern`, and `type="email"`  
- Anchor tags for internal and external navigation  
- Image accessibility using meaningful `alt` attributes  
- Ordered and unordered lists for structured content  

---

## CSS Concepts Used
- External CSS file for separation of structure and styling  
- Element, class, and ID selectors  
- Flexbox for navigation and layout  
- Card-based layouts using box model properties  
- Hover effects using `:hover` pseudo-class  
- CSS transitions and keyframe animations  
- Custom fonts using Google Fonts  
- Media queries for responsive design  

---

## JavaScript Features Implemented

### JavaScript Overview
JavaScript is used to add interactivity, form validation, and dynamic content updates to the portfolio website. The script enhances user experience without using any external libraries.

### Form Validation Logic
- Prevents form submission using `event.preventDefault()`
- Validates:
  - Name length (minimum characters)
  - Email format
  - Phone number length and numeric pattern
  - Message length
- Displays dynamic error messages below input fields
- Resets the form on successful validation

### Interactive Elements
- **Dynamic Greeting:** Displays a greeting message based on the current time
- **Active Navigation Highlight:** Highlights the selected navigation link
- **Scroll-to-Top Button:** Appears when the user scrolls down
- **Project Hover Interaction:** Adds visual effects on project cards

### DOM Manipulation Used
- Dynamically creating elements using `document.createElement()`
- Updating text using `textContent`
- Modifying styles using `element.style`
- Inserting elements using `appendChild()`, `prepend()`, and `after()`
- Selecting elements using `querySelector()` and `querySelectorAll()`

---

## Design Decisions
- A dark theme with teal accent colors was chosen for a modern appearance  
- Card-based layouts were used for projects and resume sections  
- Minimalistic design was maintained for readability  
- Hover, animation, and JavaScript interactions were added to improve user experience  

---

## Responsiveness Approach
- Media queries adapt layout for mobile and tablet screens  
- Navigation and content stack vertically on smaller devices  
- Images resize automatically for different screen widths  
- The website is usable across desktop, tablet, and mobile devices  

---

## Project Folder Structure

```text
Personal-Portfolio-Website/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── images/
│   ├── profile.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│
├── screenshots/
│   ├── home-section.png
│   ├── about-skills.png
│   ├── projects.png
│   ├── resume.png
│   ├── contact.png
│   └── form-validation.png
