function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
    }

    var params = {
        name: name,
        email: email,
        message: message,
    };
    const serviceId = "service_7q7a03k";
    const templateId = "template_9jk7fba";
    

    emailjs.send(serviceId, templateId, params)
        .then(
            function(response) {
                // Clear form fields after successful submission
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                alert("Your message was sent successfully!");
            },
            function(error) {
                console.log("Failed to send message:", error);
                alert("There was an error sending your message. Please try again.");
            }
        );
}