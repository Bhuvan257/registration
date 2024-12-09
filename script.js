$(document).ready(function () {
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Collect form data
        const formData = $(this).serialize();

        // Send data to the server via AJAX
        $.post("process.php", formData, function (response) {
            // Display the response in the #response div
            $("#response").html(response);

            // Show the success popup
            $("#successModal").fadeIn();
        });
    });

    // Close modal on button click
    $("#closeModal").on("click", function () {
        $("#successModal").fadeOut();
    });
});
