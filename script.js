const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(firstName === '') {
        addErrorTo('firstname', 'First Name cannot be empty');
    } else {
        removeErorrFrom('firstname');
    }

    if(lastName === '') {
        addErrorTo('lastname', 'Last Name cannot be empty');
    } else {
        removeErorrFrom('lastname');
    }

    if(email === '') {
        addErrorTo('email', 'Looks like this is not a valid email');
    } else {
        removeErorrFrom('email');
    }

    if(password === '') {
        addErrorTo('password', 'Password cannot be empty');
    } else {
        removeErorrFrom('password');
    }

});

function addErrorTo(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('has-error');

    const small = formControl.querySelector('small')
        small.innerText = message;
        small.style.opacity = '1';
}

function removeErorrFrom(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('has-error');

    const small = formControl.querySelector('small')
        small.innerText = '';
        small.style.opacity = '0';
}

