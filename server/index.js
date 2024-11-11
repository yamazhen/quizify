import express from "express";
import pdfParse from "pdf-parse";
import { getAllQuestions, saveQuestion } from "./database.js";

const app = express();
const port = 3000;

app.use(express.json());

app.post('/text', async (req,res) => {
    const { prompt } = req.body;
    try {
        const response = await callGeminiAPI(prompt)
        res.json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.post('/upload-pdf', express.raw({ type: "application/pdf", limit: "100mb" }), async (req,res) => {
    try {
        const fileName = req.headers['file-name'] || "unknown.pdf";
        const dataBuffer = await pdfParse(req.body);
        const extractedText = dataBuffer.text;
        const prompt = `Based on the following lecture content generate a list of questions.
            Lecture content: ${extractedText}.
            Please focus on the key concepts and important points from the lecture to create relevant questions. Provide 10 questions.`

        let response = await callGeminiAPI(prompt)

        if (typeof response === "string") {
            response = JSON.parse(response);
        }

        if (response && response.questions && Array.isArray(response.questions)) {
            for (const question of response.questions) {
                const questionData = {
                    fileName,
                    lectureTitle: response.lectureTitle,
                    lectureContent: response.lectureContent,
                    questionText: question.questionText,
                    questionType: question.questionType,
                    choices: question.choices,
                    correctAnswer: question.correctAnswer,
                    difficultyLevel: question.difficultyLevel,
                    dateCreated: new Date().toISOString()
                };
                // Save each question to SQLite
                saveQuestion(questionData);
            }
            res.json({ questions: response.questions });
        } else {
            res.status(500).json({ error: "Invalid response format. 'questions' field is missing or not an array." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.get("/questions", (req, res) => {
    getAllQuestions((err, rows) => {
        if (err) {
            res.status(500).json({ error: "Could not retrieve questions" });
        } else {
            res.json({ questions: rows });
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});
