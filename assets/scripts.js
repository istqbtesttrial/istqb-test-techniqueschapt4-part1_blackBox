// Event listener for the form in welcome.html
document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the value from the input field
    const input = document.getElementById('testInput').value;
    const feedback = document.getElementById('feedback');

    // Provide feedback based on the input
    if (input === "") {
        feedback.textContent = "Please enter a value.";
        feedback.style.color = "red";
    } else if (!isNaN(input)) {
        feedback.textContent = "This value is numeric. You could use equivalence partitioning or boundary value analysis.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "This value is textual. You could use a decision table or state transition testing.";
        feedback.style.color = "green";
    }
});
// Event listener for the form in overview.html
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginFeedback = document.getElementById('loginFeedback');

    // Provide feedback based on the input
    if (username === "" || password === "") {
        loginFeedback.textContent = "Both username and password are required.";
        loginFeedback.style.color = "red";
    } else {
        loginFeedback.textContent = "You could apply black-box testing to validate these inputs without knowing the internal logic.";
        loginFeedback.style.color = "green";
    }
});
// Event listener for the form in blackbox.html
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the value from the email input field
    const email = document.getElementById('emailInput').value;
    const emailFeedback = document.getElementById('emailFeedback');

    // Simple email validation using regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Provide feedback based on the input
    if (email === "") {
        emailFeedback.textContent = "Email cannot be empty.";
        emailFeedback.style.color = "red";
    } else if (emailPattern.test(email)) {
        emailFeedback.textContent = "Valid email format.";
        emailFeedback.style.color = "green";
    } else {
        emailFeedback.textContent = "Invalid email format. Please enter a valid email (e.g., name@example.com).";
        emailFeedback.style.color = "red";
    }
});
// Event listener for the "Add to Cart" button in experience.html
document.querySelector('.interactive-example button').addEventListener('click', function() {
    const cartFeedback = document.getElementById('cartFeedback');
    cartFeedback.textContent = "Product added to cart!";
    cartFeedback.style.color = "green";
});
// Event listener for the test technique selection form in selection.html
document.getElementById('selectionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected technique
    const selectedTechnique = document.getElementById('testTechnique').value;
    const selectionFeedback = document.getElementById('selectionFeedback');

    // Provide feedback based on the selected technique
    if (selectedTechnique === "") {
        selectionFeedback.textContent = "Please select a test technique.";
        selectionFeedback.style.color = "red";
    } else if (selectedTechnique === "blackbox") {
        selectionFeedback.textContent = "Good choice! Black-box testing is ideal for validating the system's behavior without needing to know the internal logic.";
        selectionFeedback.style.color = "green";
    } else if (selectedTechnique === "whitebox") {
        selectionFeedback.textContent = "White-box testing might not be the best choice here, as you are primarily validating system behavior, not the internal logic.";
        selectionFeedback.style.color = "orange";
    } else if (selectedTechnique === "experience") {
        selectionFeedback.textContent = "Experience-based testing could help identify edge cases or usability issues, but black-box testing would be more systematic for this task.";
        selectionFeedback.style.color = "orange";
    }
});
// Event listener for the quiz form in key-takeaways.html
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected answers
    const answer1 = document.getElementById('question1').value;
    const answer2 = document.getElementById('question2').value;
    const answer3 = document.getElementById('question3').value;
    const quizFeedback = document.getElementById('quizFeedback');

    // Initialize score
    let score = 0;

    // Check answers
    if (answer1 === "blackbox") score++;
    if (answer2 === "whitebox") score++;
    if (answer3 === "experience") score++;

    // Provide feedback
    quizFeedback.textContent = `You got ${score} out of 3 questions correct.`;
    quizFeedback.style.color = score === 3 ? "green" : "orange";
});
// Event listener for the phone number form in equivalence-partitioning.html
document.getElementById('phoneForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the phone number input
    const phoneNumber = document.getElementById('phoneInput').value;
    const phoneFeedback = document.getElementById('phoneFeedback');

    // Check if the phone number is valid using equivalence partitioning
    const phoneNum = parseInt(phoneNumber, 10);

    if (isNaN(phoneNum)) {
        phoneFeedback.textContent = "Please enter a valid number.";
        phoneFeedback.style.color = "red";
    } else if (phoneNum >= 100000 && phoneNum <= 999999) {
        phoneFeedback.textContent = "Valid phone number! This falls within the valid partition.";
        phoneFeedback.style.color = "green";
    } else {
        phoneFeedback.textContent = "Invalid phone number. This falls outside the valid partition.";
        phoneFeedback.style.color = "red";
    }
});
// Event listener for the age validation form in boundary-value-analysis.html
document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the age input
    const age = document.getElementById('ageInput').value;
    const ageFeedback = document.getElementById('ageFeedback');

    // Parse the input value to an integer
    const ageNum = parseInt(age, 10);

    // Check if the age is a valid boundary value
    if (isNaN(ageNum)) {
        ageFeedback.textContent = "Please enter a valid number.";
        ageFeedback.style.color = "red";
    } else if (ageNum === 18 || ageNum === 65) {
        ageFeedback.textContent = "Valid boundary value! Age is accepted.";
        ageFeedback.style.color = "green";
    } else if (ageNum > 18 && ageNum < 65) {
        ageFeedback.textContent = "Age is within the valid range.";
        ageFeedback.style.color = "green";
    } else {
        ageFeedback.textContent = "Invalid boundary value. Age is out of range.";
        ageFeedback.style.color = "red";
    }
});
// Event listener for the discount form in decision-table-testing.html
document.getElementById('discountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected membership and cart value
    const membership = document.getElementById('membership').value;
    const cartValue = parseFloat(document.getElementById('cartValue').value);
    const discountFeedback = document.getElementById('discountFeedback');

    // Check if cart value is valid
    if (isNaN(cartValue) || cartValue < 0) {
        discountFeedback.textContent = "Please enter a valid cart value.";
        discountFeedback.style.color = "red";
        return;
    }

    // Determine the discount based on the decision table
    let discount = 0;

    if (membership === "none") {
        discount = cartValue >= 100 ? 5 : 0;
    } else if (membership === "silver") {
        discount = cartValue >= 100 ? 10 : 5;
    } else if (membership === "gold") {
        discount = cartValue >= 100 ? 20 : 10;
    } else {
        discountFeedback.textContent = "Please select a membership type.";
        discountFeedback.style.color = "red";
        return;
    }

    // Provide feedback
    discountFeedback.textContent = `You get a ${discount}% discount on your cart!`;
    discountFeedback.style.color = "green";
});
// Vending Machine State Transition Testing
let vendingMachineState = "Idle"; // Initial state

document.getElementById('vendingMachineForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected action
    const action = document.getElementById('machineAction').value;
    const feedback = document.getElementById('vendingMachineFeedback');

    // Handle state transitions based on the current state and action
    if (action === "insertCoin" && vendingMachineState === "Idle") {
        vendingMachineState = "Has Coin";
        feedback.textContent = "Coin inserted. You can now select a product.";
        feedback.style.color = "green";
    } else if (action === "selectProduct" && vendingMachineState === "Has Coin") {
        vendingMachineState = "Dispensing";
        feedback.textContent = "Product selected. Dispensing product...";
        feedback.style.color = "green";
    } else if (action === "dispenseProduct" && vendingMachineState === "Dispensing") {
        vendingMachineState = "Idle";
        feedback.textContent = "Product dispensed. The machine is now idle.";
        feedback.style.color = "green";
    } else if (action === "outOfStock" && vendingMachineState === "Has Coin") {
        vendingMachineState = "Out of Stock";
        feedback.textContent = "The selected product is out of stock.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Invalid action for the current state.";
        feedback.style.color = "red";
    }
});
// Event listener for the final practice exercise form in conclusion.html
document.getElementById('conclusionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected test technique
    const selectedTechnique = document.getElementById('selectedTechnique').value;
    const feedback = document.getElementById('conclusionFeedback');

    // Provide feedback based on the selected test technique
    if (selectedTechnique === "") {
        feedback.textContent = "Please select a test technique.";
        feedback.style.color = "red";
    } else if (selectedTechnique === "blackbox") {
        feedback.textContent = "Great choice! Black-box testing is ideal for testing the system behavior, such as validating ticket selection and payment processing.";
        feedback.style.color = "green";
    } else if (selectedTechnique === "whitebox") {
        feedback.textContent = "White-box testing could help ensure that internal code logic, such as the handling of ticket validation and payment, works correctly.";
        feedback.style.color = "orange";
    } else if (selectedTechnique === "experience") {
        feedback.textContent = "Experience-based testing can help explore edge cases, such as unusual user behavior or rare defects, especially when documentation is limited.";
        feedback.style.color = "blue";
    }
});
// Event listener for the final quiz form in quiz.html
document.getElementById('finalQuizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected answers
    const answer1 = document.getElementById('question1').value;
    const answer2 = document.getElementById('question2').value;
    const answer3 = document.getElementById('question3').value;
    const quizFeedback = document.getElementById('quizFeedback');

    // Initialize score
    let score = 0;

    // Check answers
    if (answer1 === "systemBehavior") score++;
    if (answer2 === "codeLogic") score++;
    if (answer3 === "limitedDocumentation") score++;

    // Provide feedback
    quizFeedback.textContent = `You got ${score} out of 3 questions correct.`;
    quizFeedback.style.color = score === 3 ? "green" : "orange";
});
// Event listener for the final exercise form in final-exercise.html
document.getElementById('finalExerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the answers from the text areas
    const answer1 = document.getElementById('question1').value;
    const answer2 = document.getElementById('question2').value;
    const answer3 = document.getElementById('question3').value;
    const feedback = document.getElementById('exerciseFeedback');

    // Validate if all fields are filled
    if (answer1 === "" || answer2 === "" || answer3 === "") {
        feedback.textContent = "Please answer all the questions before submitting.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Thank you for completing the exercise. Your answers have been received.";
        feedback.style.color = "green";
    }
});

// Additional functionality can be added here for other forms or interactive elements across different pages
