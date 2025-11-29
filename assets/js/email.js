
  // Initialize EmailJS with your Public Key
  (function() {
    emailjs.init("1X8KFVsrBoaC26kLn");
  })();

  window.sendEmail = function()  {
    // Build a parameters object matching your EmailJS template variables
    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs
      .send("service_74gcpyb", "template_cdhrfwj", params)
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Failed to send message. Check console for details.");
      });
  }
