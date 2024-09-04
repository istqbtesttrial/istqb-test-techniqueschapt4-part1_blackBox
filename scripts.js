// Validate phone number (Equivalence Partitioning)
function validatePhone() {
    const phoneInput = document.getElementById('phoneInput').value;
    const phoneResult = document.getElementById('phoneResult');
    if (phoneInput.length >= 6 && phoneInput.length <= 10 && !isNaN(phoneInput)) {
        phoneResult.textContent = 'Valid phone number!';
        phoneResult.style.color = 'green';
    } else {
        phoneResult.textContent = 'Invalid phone number. Please enter 6-10 digits.';
        phoneResult.style.color = 'red';
    }
}

// Validate pizza quantity (Boundary Value Analysis)
function validatePizza() {
    const pizzaInput = document.getElementById('pizzaInput').value;
    const pizzaResult = document.getElementById('pizzaResult');
    const pizzaQuantity = parseInt(pizzaInput);
    if (pizzaQuantity >= 1 && pizzaQuantity <= 10) {
        pizzaResult.textContent = 'Valid pizza quantity!';
        pizzaResult.style.color = 'green';
    } else {
        pizzaResult.textContent = 'Invalid quantity. Order between 1 and 10 pizzas.';
        pizzaResult.style.color = 'red';
    }
}

// Validate username (Equivalence Partitioning Detailed)
function validateUsername() {
    const usernameInput = document.getElementById('usernameInput').value;
    const usernameResult = document.getElementById('usernameResult');
    if (usernameInput.length >= 5 && usernameInput.length <= 15) {
        usernameResult.textContent = 'Valid username!';
        usernameResult.style.color = 'green';
    } else {
        usernameResult.textContent = 'Invalid username. Length must be 5-15 characters.';
        usernameResult.style.color = 'red';
    }
}

// Validate withdrawal (Boundary Value Analysis Detailed)
function validateWithdrawal() {
    const withdrawalInput = document.getElementById('withdrawalInput').value;
    const withdrawalResult = document.getElementById('withdrawalResult');
    const withdrawalAmount = parseInt(withdrawalInput);
    if (withdrawalAmount >= 10 && withdrawalAmount <= 5000) {
        withdrawalResult.textContent = 'Valid withdrawal amount!';
        withdrawalResult.style.color = 'green';
    } else {
        withdrawalResult.textContent = 'Invalid amount. Withdrawal must be between $10 and $5000.';
        withdrawalResult.style.color = 'red';
    }
}
