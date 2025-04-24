(function() {
    // Initialize EmailJS with your user ID
    emailjs.init("shashank.malik@hotmail.com");

    $(document).ready(function() {
        // Handle form submission
        $('#contact-form').on('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            var formData = {
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            };

            // Disable submit button to prevent multiple submissions
            var $submitButton = $(this).find('input[type="submit"]');
            $submitButton.prop('disabled', true).val('Sending...');

            // Send email using EmailJS
            emailjs.send('service_2lo7xhy', 'template_qgmgus7', formData)
                .then(function(response) {
                    // Success: Show confirmation and reset form
                    alert('Message sent successfully!');
                    $('#contact-form')[0].reset();
                    $submitButton.prop('disabled', false).val('Send Message');
                }, function(error) {
                    // Error: Show error message
                    alert('Failed to send message. Please try again later.');
                    console.error('EmailJS error:', error);
                    $submitButton.prop('disabled', false).val('Send Message');
                });
        });
    });
})();
