document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });

    }


    // Close mobile menu after selecting a link
    const menuLinks = document.querySelectorAll(".nav-links a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });

    });


    // Back to Top button
    const backToTop = document.querySelector("#backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});


// Service Request Form
const serviceForm = document.querySelector("#serviceForm");

if (serviceForm) {

    serviceForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const customerName =
            document.querySelector("#customerName").value;

        const serviceNeeded =
            document.querySelector("#serviceNeeded").value;

        const customerPhone =
            document.querySelector("#customerPhone").value;

        const serviceMessage =
            document.querySelector("#serviceMessage").value;

        const whatsappMessage =
            "Hello Jose Tech Hub!%0A%0A" +
            "I would like to request a service.%0A%0A" +
            "Name: " + encodeURIComponent(customerName) + "%0A" +
            "Service: " + encodeURIComponent(serviceNeeded) + "%0A" +
            "Phone: " + encodeURIComponent(customerPhone) + "%0A" +
            "Request: " + encodeURIComponent(serviceMessage);

        const whatsappURL =
            "https://wa.me/256704455234?text=" +
            whatsappMessage;

      alert("Request ready! WhatsApp will now open so you can send your request to Jose Tech Hub.");

        window.open(whatsappURL, "_blank");

    });

}











