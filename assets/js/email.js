
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
      .then((response) => {
		const statusDiv = document.getElementById("form-status");
        if (statusDiv) {
			statusDiv.textContent = "Message sent successfully!";
			statusDiv.style.color = "green";
			document.getElementById("contact-form").reset();
		}
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        statusDiv.textContent = "Failed to send message. Please try again.";
		statusDiv.style.color = "red";
      });
  }
