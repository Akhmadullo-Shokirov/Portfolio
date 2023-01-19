const fullName = document.getElementById("fullName");
const emailAddress = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const feedbackType = document.getElementById("feedbackType");
const comment = document.getElementById("comment");
const submitBtn = document.getElementById("form-btn");

const submitForm = () => {
    axios.post('http://localhost:3000/form/submit', {
        fullName: fullName.value,
        email: emailAddress.value,
        message: comment.value,
        phoneNumber: phoneNumber.value,
        type: feedbackType.value
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
};

submitBtn.addEventListener('click', submitForm);
