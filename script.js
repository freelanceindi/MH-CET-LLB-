// Replace this URL with your live payment/checkout link.
// Example: your Instamojo payment link or another provider's checkout URL.
const CHECKOUT_URL = "PASTE_YOUR_CHECKOUT_LINK_HERE";

document.querySelectorAll("[data-checkout]").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (CHECKOUT_URL.includes("PASTE_YOUR_CHECKOUT_LINK_HERE")) {
      event.preventDefault();
      alert("Checkout is not connected yet. Replace CHECKOUT_URL in script.js with your live payment link.");
      return;
    }
    button.href = CHECKOUT_URL;
  });
});
