$(document).ready(function() {
    // Initialize EmailJS with your User ID
    emailjs.init("shashank.malik@hotmail.com"); // Replace with your EmailJS User ID

    // Handle form submission
    $('#contact').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        var formData = {
            name: $('#name').val().trim(),
            email: $('#email').val().trim(),
            message: $('#message').val().trim()
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill out all fields.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Send email via EmailJS
        emailjs.send('service_2lo7xhy', 'template_qgmgus7', formData)
            .then(function(response) {
                console.log('Email sent successfully:', response);
                alert('Your message has been sent successfully!');
                $('#contact form')[0].reset(); // Reset the form
            }, function(error) {
                console.error('Email sending failed:', error);
                alert('Failed to send your message. Please try again later.');
            });
    });
});
