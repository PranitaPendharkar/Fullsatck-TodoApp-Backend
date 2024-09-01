/* const TodoModel=require('../models/Todomodels')

module.exports.getTodo=async(req,res)=>{
    const todo=await TodoModel.find()
    res.send(todo)
}

module.exports.saveTodo=async(req,res)=>{
    const {text}=req.body

    TodoModel.create({text})
    .then((data)=>{("Added sucessfully");
    console.log(data);
    res.send(data)
})
}
  */
const TodoModel = require('../models/Todomodels');

module.exports.getTodo = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching todos', error });
    }
};

module.exports.saveTodo = async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ message: 'Text field is required' });
    }

    try {
        const newTodo = await TodoModel.create({ text });
        console.log('Added successfully:', newTodo);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: 'Error saving todo', error });
    }
};
  

module.exports.updateTodo = async (req, res) =>{
    const {_id,text}=req.body

    TodoModel.findByIdAndUpdate(_id,{text})
    .then(()=>res.send("updated sucessfully"))
    .catch((err)=>console.log(err))
    
}
/*module.exports.updateTodo = async (req, res) => {
    const { _id, text } = req.body;

    if (!_id || !text) {
        return res.status(400).json({ message: 'ID and text fields are required' });
    }

    try {
        const updatedTodo = await TodoModel.findByIdAndUpdate(
            _id,              // The ID of the document to update
            { text },          // The new text to update in the document
            { new: true }      // Return the updated document
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json(updatedTodo);
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ message: 'Error updating todo', error });
    }
};*/
module.exports.deleteTodo = async (req, res) =>{
    const {_id}=req.body

    TodoModel.findByIdAndDelete(_id)
    .then(()=>res.send("deleted sucessfully"))
    .catch((err)=>console.log(err))
    
}