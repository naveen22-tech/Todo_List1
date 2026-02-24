const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Todo_Task");

const todoSchema = new mongoose.Schema({
    task: String
});

const Todo = mongoose.model("Todo", todoSchema);

app.get("/todos", async (req, res) => {
    res.json(await Todo.find())
});

app.post("/todos", async (req, res) => {
    res.json(await Todo.create(req.body))
})

app.delete("/todos/:id", async (req, res) =>{
    res.json(await Todo.findByIdAndDelete(req.params.id))
});

app.listen(3000, () =>{
    console.log("Server is running....");
})