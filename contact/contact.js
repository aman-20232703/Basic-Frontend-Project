        const form = document.getElementById("contactForm");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your message has been submitted successfully.");
            form.reset();
        });