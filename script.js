// Smooth scrolling when clicking on navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent the default action of jumping to the section

        // Get the target section by the href attribute (i.e., the ID of the section)
        const targetId = this.getAttribute('href').substring(1);  // Remove the '#' from the href
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section with a smooth animation
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Alert when the "Contact" section is clicked
document.getElementById('contact').addEventListener('click', function() {
    alert("Thank you for visiting the contact section!");
});
// OTP Generator with Expiry
function generateOTPWithExpiry(length = 6, ttl = 5 * 60 * 1000) {
    let otp = '';
    const digits = '0123456789';

    // Generate OTP
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        otp += digits[randomIndex];
    }

    // Store OTP and expiry time
    const expiryTime = Date.now() + ttl; // TTL in milliseconds
    const otpData = { otp, expiryTime };

    return otpData;
}
