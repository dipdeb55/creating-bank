document.getElementById('submit-guta').addEventListener('click', function () {
    const emailID = document.getElementById('email-entry');
    const userEmail = emailID.value;

    const passwordNumber = document.getElementById('password-entry');
    const userPassword = passwordNumber.value;
    if (userEmail == 'digital@bd.com' && userPassword == 'bangladesh') {
        window.location.href = 'digitalbanking.html';
    }
});