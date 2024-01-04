
    let validateForm = () => {
      let userName = document.getElementById('userName').value;
      let userPassword = document.getElementById('userPassword').value;
      let userMobile = document.getElementById('userMobile').value;
      let errorMessage = document.getElementById('error-message');
      let successMessage = document.getElementById('success-message');
      let outputDiv = document.getElementById('output');
      // Reset error message
      errorMessage.innerHTML = '';

      // Simple validation for empty or not
      if (userName === '' || userPassword === '' || userMobile === '') {
        errorMessage.innerHTML = 'All fields are required.';
        return;
      }

      // mobile number (10 digits) checking
      var mobileRegex = /^\d{10}$/;
      if (!mobileRegex.test(userMobile)) {
        errorMessage.innerHTML = 'Please enter a valid 10-digit mobile number.';
        return;
      }

    //   let outputMessage = "Name is : " + userName + " " + "and Mobile is :" + userMobile + " " + "Password is :" + userPassword;

    let outputMessage = `Name is ${userName}, Password is ${userPassword} and Mobile No. is ${userMobile}`

    outputDiv.innerHTML = outputMessage;

      // If all validations pass, you can submit the form or perform further actions
    //   successMessage.innerHTML = 'Registration successful!';


      console.log(outputMessage);
    }
  