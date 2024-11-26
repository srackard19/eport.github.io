// Basic JavaScript to handle form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been received: "${message}"`);
});
