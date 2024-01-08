// This will hide the popup box
let popUpP = document.getElementById('popUp');
popUpP.style.display="none";
// popUpP.style.visibility = "visible";


//this is for validating register form data
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
    popUpP.style.display = "block";
    let displayFormData = document.getElementById("popupPara");
    displayFormData.innerHTML = totalData;
    displayFormData.style.color="green";
    displayFormData.style.maxHeight="max-content"
  };

  let showError = (id, message) => {
    let errorMsg = document.getElementById(id);
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
  saveFormData();
  let popUpP = document.getElementById('popUp');
  popUpP.style.display= "none";
  location.reload();
}

const saveFormData = () => {
  // Create an object with form data
  const formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    userId: document.getElementById('userId').value,
    eMail: document.getElementById('eMail').value,
    passWord: document.getElementById('passWord').value,
    confirmPassword: document.getElementById('confirmPassword').value,
  };

  // Convert the object to a JSON string
  const jsonData = JSON.stringify(formData, null, 2);

  // Save the JSON data in local storage with a key 'formData'
  localStorage.setItem('formData', jsonData);
};


// let loginForm =() =>{
//   let logUser = document.getElementById('logEmail').value;
//   let logPass = document.getElementById('logPass').value;

//   let displayError = (id, message) =>{
//     let errorAtField = document.getElementById('id');
//     errorAtFiels.style.color= "red";
//     errorAtField.textContent = message;
//   }


//   if(logUser === ""){
//     displayError('errorMsg4', 'Please enter email');
//     // alert("Please enter your Email");
//   }
// }