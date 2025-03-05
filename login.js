document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordLink = document.getElementById('forgotPassword');
    
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        const email = prompt("Please enter your email address:");
        if (email) {
            // Here you would typically send an AJAX request to a PHP script
            // that handles sending a password reset email
            alert("If an account exists for " + email + ", a password reset link will be sent.");
        }
    });
});
