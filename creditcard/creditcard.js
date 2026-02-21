const form = document.getElementById("paymentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const cardNumber = document.getElementById("cardNumber").value.trim();
    const month = document.getElementById("month").value.trim();
    const year = document.getElementById("year").value.trim();

    // Validate exact card number
    if (cardNumber !== "1234123412341234") {
        message.style.color = "red";
        message.textContent = "Invalid credit card number.";
        return;
    }

    // Validate expiration date
    const currentDate = new Date();
    const currentYear = parseInt(currentDate.getFullYear().toString().slice(-2));
    const currentMonth = currentDate.getMonth() + 1;

    const expMonth = parseInt(month);
    const expYear = parseInt(year);

    if (
        isNaN(expMonth) || isNaN(expYear) ||
        expMonth < 1 || expMonth > 12 ||
        expYear < currentYear ||
        (expYear === currentYear && expMonth < currentMonth)
    ) {
        message.style.color = "red";
        message.textContent = "Card is expired.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Payment successful!";
});