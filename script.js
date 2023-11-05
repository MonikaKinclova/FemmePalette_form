document.getElementById('applicationForm').addEventListener('submit', function(event){
    event.preventDefault();
  

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    var reason = document.getElementById('reason').value;
    var bestCandidate = document.getElementById('bestCandidate').value;

    if (!firstName || !lastName || !email) {
      alert('Please fill in all required information.');
      return; 
    }
  
    var formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      linkedin: linkedin,
      reason: reason,
      bestCandidate: bestCandidate
    };

var successMessage = document.createElement('div');
successMessage.innerHTML = '<p>The form was sent successfully. Thank you!</p><p>Data from the form:</p><ul>' +
  '<li>First Name: ' + firstName + '</li>' +
  '<li>Last name: ' + lastName + '</li>' +
  '<li>Email: ' + email + '</li>' +
  '<li>LinkedIn: ' + linkedin + '</li>' +
  '<li>Why do you want to become part of the Femme Palette team? ' + reason + '</li>' +
  '<li>Why are you the best candidate for this role?' + bestCandidate + '</li></ul>';
successMessage.className = 'success-message'; 

var formContainer = document.querySelector('.form-container');
formContainer.innerHTML = '';
formContainer.appendChild(successMessage);

  });



