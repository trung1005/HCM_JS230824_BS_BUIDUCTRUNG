import { todoModel } from "../models/todo.model.js";

export const todoController = {
    create: async (req, res)=>{
        try{
            let data = req.body
            let result = await todoModel.create(data)

            res.status(200).json({
                message: "User created successfully",
                data: result
            })
        }catch(err){
            console.log(err);
        }
    },
    getAll: async (req, res)=>{
        try{
            let result = await todoModel.getAll()
            res.status(200).json({
                message: "Users fetched successfully",
                data: result
            })
        }catch(err){
            console.log(err);
        }
    },
    update: async (req, res)=>{
        try{
            let id = Number(req.params.id)
            let userUpdate = await todoModel.findById(id)
            let data = {
                ...userUpdate,
                ...req.body
            }
            let result = await todoModel.update(id, data)

            res.status(200).json({
                message: "User updated successfully",
                data: result
            })
        }catch(err){
            console.log(err);
        }
    },
    delete: async (req, res)=>{
        try{
            let id = Number(req.params.id)

            let result = await todoModel.delete(id)
            res.status(200).json({
                message: "User deleted successfully",
                data: result
            })
        }catch(err){
            console.log(err);
        }
    }
}