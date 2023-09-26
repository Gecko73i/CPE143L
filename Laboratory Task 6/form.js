function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const middleInitial = document.getElementById("middleInitial").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    if (!firstName || !middleInitial || !lastName || !isValidEmail(email)) {
        alert("Invalid inputs. Please check your information.");
        return false;
    }

    alert("Success!");
    return true;
}

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
