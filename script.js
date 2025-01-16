function promptFirstName() {
    let firstName = prompt("Enter your first name:");

    while (!firstName || firstName.trim() === "") {
        alert("First name cannot be empty. Please enter a valid first name.");
        firstName = prompt("Enter your first name:");
    }

    return firstName.trim();
}

function promptLastName() {
    let lastName = prompt("Enter your last name:");

    while (!lastName || lastName.trim() === "") {
        alert("Last name cannot be empty. Please enter a valid last name.");
        lastName = prompt("Enter your last name:");
    }

    return lastName.trim();
}

function promptCountry() {
    let country = prompt("Enter your country:");
    while (!country || country.trim() === "") {
        alert("Country cannot be empty. Please enter a valid country.");
        country = prompt("Enter your country:");
    }
    return country.trim();
}

function promptPhoneNumber() {
    let phoneNumber = prompt("Enter your phone number:");
    while (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        phoneNumber = prompt("Enter your phone number:");
    }
    return phoneNumber.trim();
}

function promptState() {
    let state = prompt("Enter your state:");
    while (!state || state.trim() === "") {
        alert("State cannot be empty. Please enter a valid state.");
        state = prompt("Enter your state:");
    }
    return state.trim();
}

function promptCity() {
    let city = prompt("Enter your city:");
    while (!city || city.trim() === "") {
        alert("City cannot be empty. Please enter a valid city.");
        city = prompt("Enter your city:");
    }
    return city.trim();
}

function promptVillage() {
    let village = prompt("Enter your village:");
    while (!village || village.trim() === "") {
        alert("Village cannot be empty. Please enter a valid village.");
        village = prompt("Enter your village:");
    }
    return village.trim();
}

function collectUserData() {
    const firstName = promptFirstName();
    const lastName = promptLastName();
    const country = promptCountry();
    const phoneNumber = promptPhoneNumber();
    const state = promptState();
    const city = promptCity();
    const village = promptVillage();

    // Show the user card and populate the data
    document.getElementById("first-name").textContent = firstName;
    document.getElementById("last-name").textContent = lastName;
    document.getElementById("country").textContent = country;
    document.getElementById("phone-number").textContent = phoneNumber;
    document.getElementById("state").textContent = state;
    document.getElementById("city").textContent = city;
    document.getElementById("village").textContent = village;

    // Display the card
    document.getElementById("user-card").style.display = "block";
}