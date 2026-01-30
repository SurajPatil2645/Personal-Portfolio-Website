
// function to select elements
function $(selector) {
    return document.querySelector(selector);
}

// function to show error messages
function showError(element, message) {
    element.textContent = message;
    element.style.color = "red";
    element.style.fontSize = "14px";
}

// function to clear error messages
function clearError(element) {
    element.textContent = "";
}

const form = $("form");
const nameInput = $("#name");
const emailInput = $("#email");
const phoneInput = $("#phone");
const messageInput = $("#message");

// Create error message elements
const nameError = document.createElement("div");
const emailError = document.createElement("div");
const phoneError = document.createElement("div");
const messageError = document.createElement("div");

nameInput.after(nameError);
emailInput.after(emailError);
phoneInput.after(phoneError);
messageInput.after(messageError);

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form submission

    let isValid = true;

    // Name validation
    if (nameInput.value.trim().length < 3) {
        showError(nameError, "Name must be at least 3 characters long");
        isValid = false;
    } else {
        clearError(nameError);
    }

    // Email validation
    if (!emailInput.value.includes("@")) {
        showError(emailError, "Please enter a valid email address");
        isValid = false;
    } else {
        clearError(emailError);
    }

    // Phone validation
    if (!/^\d{10}$/.test(phoneInput.value)) {
        showError(phoneError, "Phone number must be 10 digits");
        isValid = false;
    } else {
        clearError(phoneError);
    }

    // Message validation
    if (messageInput.value.trim().length < 10) {
        showError(messageError, "Message must be at least 10 characters");
        isValid = false;
    } else {
        clearError(messageError);
    }

    // Success message
    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

// Navbar active link highlight
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// Scroll-to-top button 
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.display = "none";
scrollBtn.style.cursor = "pointer";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", function () {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// greeting based on time
const homeSection = $("#home");
const greeting = document.createElement("p");

const hour = new Date().getHours();
if (hour < 12) greeting.textContent = "Good Morning 👋";
else if (hour < 18) greeting.textContent = "Good Afternoon 👋";
else greeting.textContent = "Good Evening 👋";

homeSection.prepend(greeting);

// (DOM manipulation)
const projects = document.querySelectorAll("#projects article");

projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
        project.style.border = "2px solid #22d3ee";
    });

    project.addEventListener("mouseleave", () => {
        project.style.border = "none";
    });
});
