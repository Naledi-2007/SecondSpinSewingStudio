
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. SERVICES PAGE SEARCH
    // ==========================================

    const serviceSearch = document.getElementById("serviceSearch");
    const searchMessage = document.getElementById("searchMessage");

    if (serviceSearch) {
        const serviceCards = document.querySelectorAll(".card-grid .card");

        serviceSearch.addEventListener("input", function () {
            const searchTerm = serviceSearch.value.toLowerCase().trim();
            let visibleCount = 0;

            serviceCards.forEach(function (card) {
                const cardText = card.textContent.toLowerCase();
                const matches = cardText.includes(searchTerm);

                card.style.display = matches ? "" : "none";

                if (matches) {
                    visibleCount++;
                }
            });

            if (searchMessage) {
                if (searchTerm === "") {
                    searchMessage.textContent = "";
                } else if (visibleCount === 0) {
                    searchMessage.textContent = "No matching services found.";
                } else {
                    searchMessage.textContent =
                        visibleCount + " service(s) found.";
                }
            }
        });
    }


    // ==========================================
    // 2. ENQUIRY FORM VALIDATION
    // ==========================================

    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!enquiryForm.checkValidity()) {
                enquiryForm.reportValidity();
                return;
            }

            alert("Thank you! Your enquiry form has passed validation.");

            enquiryForm.reset();
        });
    }


    // ==========================================
    // 3. CONTACT FORM VALIDATION AND EMAIL
    // ==========================================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const nameField = contactForm.querySelector(
                '[name="name"], [name="fullName"], #contactName'
            );

            const emailField = contactForm.querySelector(
                '[name="email"], #contactEmail'
            );

            const subjectField = contactForm.querySelector(
                '[name="subject"], #subject'
            );

            const messageField = contactForm.querySelector(
                '[name="message"], #contactMessage'
            );

            if (!nameField || !emailField || !messageField) {
                alert(
                    "The contact form fields could not be identified. " +
                    "Please check the field names in contact.html."
                );
                return;
            }

            const name = nameField.value.trim();
            const email = emailField.value.trim();
            const subject = subjectField
                ? subjectField.value.trim()
                : "Website enquiry";

            const message = messageField.value.trim();

            const recipient = "info@secondspin.co.za";

            const emailSubject = encodeURIComponent(subject);

            const emailBody = encodeURIComponent(
                "Name: " + name + "\n" +
                "Email: " + email + "\n\n" +
                "Message:\n" + message
            );

            const mailtoLink =
                "mailto:" + recipient +
                "?subject=" + emailSubject +
                "&body=" + emailBody;

            window.location.href = mailtoLink;
        });
    }

});
