
let popUpP = document.getElementById('popUp');
popUpP.style.visibility = "hidden";

const validateForm = () => {
  // Get the form element
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let userId = document.getElementById('userId').value;
  let eMail = document.getElementById('eMail').value;
  let passWord = document.getElementById('passWord').value;
  let confirmPassword = document.getElementById('confirmPassword').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let totalData = `You have filled in:<br />
    -> First name: ${firstName}<br />
    -> Last name: ${lastName}<br />
    -> User Id: ${userId}<br />
    -> Email: ${eMail}<br />
    -> Password: ${passWord}`;

  let openPopup = () => {
    popUpP.style.visibility = "visible";
    let displayFormData = document.getElementById("popupPara");
    displayFormData.innerHTML = totalData;
    displayFormData.style.color="green";
    // displayFormData.style.maxHeight="max-content"
  };

  let showError = (id, message) => {
    const errorMsg = document.getElementById(id);
    errorMsg.style.color = "red";
    errorMsg.innerHTML = message;
  };

  if (firstName === "") {
    showError('errorMsg1', "First name cannot be empty");
  } else if (lastName === "") {
    showError('errorMsg1', "Last name cannot be empty");
  } else if (userId === "") {
    showError('errorMsg2', "User Id cannot be empty");
  } else if (eMail === "" || !emailRegex.test(eMail)) {
    showError('errorMsg3', "Email cannot be empty or is invalid");
  } else if (passWord === "" || passWord.length < 6) {
    showError('errorMsg4', "Password must be at least 6 characters long");
  } else if (confirmPassword === "" || confirmPassword !== passWord) {
    showError('errorMsg4', "Confirm password does not match with Password");
  } else if (!document.getElementById('check').checked) {
    showError('errorMsg4', "Confirm the details by checking the box");
  } else {
    openPopup();
  }
};

let closePopup = () =>{
  let popUpP = document.getElementById('popUp');
  popUpP.style.visibility= "hidden";
  location.reload();
}