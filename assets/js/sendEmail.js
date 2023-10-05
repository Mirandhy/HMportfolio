function sendEmail(mailBody,name,email,status) {
  var params = {
    email: "noreply.hiurimi@gmail.com",
    message: mailBody,
    from_name: `${name}-${email}`,
    from_email:email
  };

  const serviceID = "service_s4mcwp8";
  const templateID = "template_acm9gi1";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      window.hasSent = false;
      document.getElementById("email").value = "";
      document.getElementById("name").value = "";
      document.getElementById("message").value = "";
      toastr.success("Thanks for reaching out to me,I will contact you shortly");
      
    })
    .catch((err) =>
    
      console.log(err));
}
