
let myForm = document.querySelector('form');
let myFirstName = document.querySelector('#FirstName');
let myLastName = document.querySelector('#LastName');
let myEmail = document.querySelector('#email');
let myMessage = document.querySelector('#message');

let paraMessage = document.querySelector('#confirmMessage');

document.addEventListener('DOMContentLoaded', () => {
if (myForm) {
  myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formBody = {
      FirstName:myFirstName.value,
      LastName:myLastName.value,
      email:myEmail.value,
      message:message.value
    }
    const requestHeaders = {
      "Content-Type" : "application/json"
    }

    fetch('/newsletter', {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(formBody),
    }).then(response => response.json())
      .then((responsedata) => {
        console.log(responsedata);
        paraMessage.textContent=`Hi ${responsedata.FirstName}, your message
        has been received, we will contact you at ${responsedata.email}`;
      })

      .catch((error) => {
        console.error('Error:', error);
      })
  });

}})
