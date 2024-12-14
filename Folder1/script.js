// JavaScript for EduConnect

// Function to toggle tips for a specific year
function showTips(year) {
    const tipsContainer = document.getElementById(`tips-${year}`);
    if (tipsContainer.style.display === "none" || tipsContainer.style.display === "") {
        tipsContainer.style.display = "block";
        tipsContainer.innerHTML = `<ul>
            <li>Start building your skills with online courses.</li>
            <li>Participate in coding challenges and hackathons.</li>
            <li>Work on small projects to showcase your learning.</li>
        </ul>`;
    } else {
        tipsContainer.style.display = "none";
        tipsContainer.innerHTML = "";
    }
}

// Function to submit a question anonymously
function submitQuestion() {
    const questionInput = document.getElementById("question");
    const questionsContainer = document.getElementById("questions-container");

    if (questionInput.value.trim() === "") {
        alert("Please enter a question.");
        return;
    }

    // Create a new question element
    const questionElement = document.createElement("div");
    questionElement.classList.add("question-item");
    questionElement.textContent = questionInput.value;

    // Append to the questions container
    questionsContainer.appendChild(questionElement);

    // Clear the input
    questionInput.value = "";

    alert("Your question has been submitted anonymously.");
}

// Event listeners can be added here if needed for dynamic features
