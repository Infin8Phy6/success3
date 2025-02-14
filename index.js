const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend connections
app.use(cors()); 
app.use(express.json()); // Middleware for parsing JSON requests

// Corrected CORS Headers Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins, change * to specific domain if needed
  res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE"); // Allowed HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Allowed headers
  next();
});

// Define the Question type
const questions = [
    {
        "major": "Science",
        "subject": "Physics",
        "difficulty": "Medium",
        "bloomstaxonomy": "Knowledge",
        "ytlink": "To follow",
        "qid": "",
        "question": "What is the acceleration due to gravity near the Earth's surface?",
        "options": [
          "A. 0 m/s²",
          "B. 9.8 m/s²",
          "C. 10 m/s²",
          "D. 19.6 m/s²"
        ],
        "correctAnswer": "B. 9.8 m/s²"
      ,
"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Science",
        "subject": "Physics",
        "difficulty": "Medium",
        "bloomstaxonomy": "Understanding",
        "ytlink": "To follow",
        "qid": "",
        "question": "Explain why a feather and a hammer will fall at the same rate in a vacuum.",
        "options": [
          "A. They have the same mass.",
          "B. They experience the same gravitational force per unit mass.",
          "C. Air resistance does not affect their motion.",
          "D. All of the above."
        ],
        "correctAnswer": "D. All of the above."
      ,
"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Science",
        "subject": "Physics",
        "difficulty": "Medium",
        "bloomstaxonomy": "Application",
        "ytlink": "To follow",
        "qid": "",
        "question": "An object is dropped from a height of 20 meters. How long does it take to reach the ground? (Assume no air resistance)",
        "options": [
          "A. 1 second",
          "B. 2 seconds",
          "C. 4 seconds",
          "D. 8 seconds"
        ],
        "correctAnswer": "B. 2 seconds"
      ,
"explanation":"To follow: wait for new app release/updates"
},
      {
        "major": "Science",
        "subject": "Physics",
        "difficulty": "Medium",
        "bloomstaxonomy": "Analysis",
        "ytlink": "To follow",
        "qid": "",
        "question": "Analyze the motion of a ball thrown vertically upwards. Describe how its velocity and acceleration change throughout its flight.",
        "options": [
          "A. Velocity decreases on the way up, becomes zero at the highest point, and increases on the way down. Acceleration remains constant and downward.",
          "B. Velocity remains constant throughout the flight. Acceleration is zero at the highest point.",
          "C. Velocity increases throughout the flight. Acceleration is constant and downward.",
          "D. Velocity and acceleration both increase on the way up and decrease on the way down."
        ],
        "correctAnswer": "A. Velocity decreases on the way up, becomes zero at the highest point, and increases on the way down. Acceleration remains constant and downward."
      ,
"explanation":"To follow: wait for new app release/updates"
},

  ];

// Route to fetch questions
app.get("/api/questions", (req, res) => {
  res.json(questions); // Send the list of questions as the response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
