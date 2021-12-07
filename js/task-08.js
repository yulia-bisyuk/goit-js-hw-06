

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    if (formEl.elements.email.value === '' || formEl.elements.password.value === '') {
        alert('All fields must be filled in!');
    }
    else {
        const userData = {
            email: formEl.elements.email.value,
            password: formEl.elements.password.value,
        }
            console.log(userData);
            formEl.reset();
            
        };
}
    