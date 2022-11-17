const form = document.forms[0];
const email = form.elements.email;
const hint = document.querySelector('.mainForm_errMsg');
const submit = form.elements.submit;

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

submit.addEventListener('click', function () {
    if (isEmpty(email)) {
        emptyHandler();
    } else if (!isFormatCorrect(email.value)) {
        errHandler();
    } else {
        correctHandler();
    }
});

email.addEventListener('input', function () {
    if (isEmpty(this)) {
        email.classList.remove('error');
        hint.innerHTML = '';
    }
});

function emptyHandler() {
    email.classList.add('error');
    hint.innerHTML = 'Whoops! It looks like you forgot to add your email';
}

function errHandler() {
    email.classList.add('error');
    hint.innerHTML = 'Please provide a valid email address';
}

function correctHandler() {
    email.classList.remove('error');
    hint.innerHTML = '';
}

function isFormatCorrect(str) {
    const pattern = /^[\w\-]+@[\w\-]+\.tid$/;
    return pattern.test(str);
}

function isEmpty(input) {
    return input.value === '' ? true : false;
}