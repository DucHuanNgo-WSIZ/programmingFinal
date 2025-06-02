document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('theForm');
    form.addEventListener('submit', submit);
});

function submit(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('emailField').value;
    let testAge = document.getElementById('ageField'); // used let instead of const so that i can change it later if i wanted

    let age = parseInt(testAge.value, 10);

    if (fullName === "") {
        alert("Name is empty");
        return;
    }

    if (age <= 0) {
        alert("Please enter a valid age greater than 0.");
        return;
    }

    if (age <= 18) {
        alert("You must be over 18 to submit!");
        return;
    }

    if (!isEmailValid(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Valid people get added
    const peopleList = document.getElementById('peopleList');
    const li = document.createElement('li');
    li.textContent = `${fullName} (${email}, Age: ${age})`;
    peopleList.appendChild(li);
}

function isEmailValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}