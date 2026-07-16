// Email Generator
function generateEmail() {
    const recipient = document.getElementById("recipient").value;
    const subject = document.getElementById("subject").value;
    const purpose = document.getElementById("purpose").value;

    const email = `Dear ${recipient},

I hope you are well.

I am writing regarding ${subject}. ${purpose}

Please let me know if you require any additional information.

Kind regards`;

    document.getElementById("emailOutput").value = email;
}

// Meeting Summarizer
function summarizeMeeting() {
    const notes = document.getElementById("meetingNotes").value;

    const summary = `Meeting Summary:

${notes.substring(0, 200)}...

Action Items:
• Follow up on discussed tasks
• Assign responsibilities
• Schedule next meeting`;

    document.getElementById("meetingSummary").value = summary;
}

// Task Planner
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

// Research Assistant
function researchTopic() {
    const topic = document.getElementById("researchTopic").value;

    const result = `Research Topic: ${topic}

Overview:
${topic} is an important subject that can improve productivity and efficiency.

Key Points:
• Understanding fundamentals
• Benefits and applications
• Challenges and opportunities
• Future developments`;

    document.getElementById("researchOutput").value = result;
}

// AI Chatbot
function chatBot() {
    const input = document.getElementById("chatInput").value.toLowerCase();
    let response = "";

    if (input.includes("hello")) {
        response = "Hello! How can I help you today?";
    } else if (input.includes("productivity")) {
        response = "Productivity is about managing your time and tasks effectively.";
    } else if (input.includes("email")) {
        response = "You can use the Email Generator to create professional emails.";
    } else {
        response = "Thank you for your question. I am Docket AI Assistant.";
    }

    document.getElementById("chatOutput").value = response;
}
