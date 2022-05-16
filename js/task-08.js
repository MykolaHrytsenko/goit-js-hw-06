const loginForm = document.querySelector('.login-form');

function submitHandler(event) {
    event.preventDefault();

    const isFormValid = [...event.target.elements]
        .filter((el) => el.tagName === 'INPUT')
        .some((el) => el.value === '');
    if (isFormValid) {
        alert('Всі поля повинні бути заповнені!');
        return;
    };

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    const formData = { email, password };

    console.log(formData);

    event.currentTarget.reset();

    // const formData = new FormData(event.currentTarget);

    // console.log(formData);

    // formData.forEach((email, password) => {
    //     console.log(`mail`, email);
    //     console.log(`password`, password);
    // })                                       ----- це працює якось дивно.


};

loginForm.addEventListener('submit', submitHandler);


