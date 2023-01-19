const fullName = document.getElementById("fullName");
const emailAddress = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const feedbackType = document.getElementById("feedbackType");
const comment = document.getElementById("comment");
const submitBtn = document.getElementById("form-btn");
const popup = document.getElementById('popup');
const form = document.getElementById('myForm');

function openPopup() {
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup');
}
const submitForm = () => {
    axios.post('http://localhost:3000/form/submit', {
        fullName: fullName.value,
        email: emailAddress.value,
        message: comment.value,
        phoneNumber: phoneNumber.value,
        type: feedbackType.value
    })
    .then(function (response) {
        form.reset();
        openPopup();
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};

function handleForm(event) {
    event.preventDefault();
    submitForm();
    // submitBtn.addEventListener('click', submitForm);
}

form.addEventListener('submit', handleForm);
