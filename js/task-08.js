
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    

    if (formEl.elements.email.value === '' || formEl.elements.password.value === '') {
        alert('All fields must be filled in!');
    }
    else {
        formData.forEach((value, name) => {

            formEl.reset();
            console.log({ name, value });

        });
}
    
}
