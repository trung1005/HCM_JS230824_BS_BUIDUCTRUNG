import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const todoModel = {
    create: async (data) => {
        try{
            let newTodo = await prisma.todo.create({
                data
            })
            return newTodo
        }catch(err){
            console.log(err);
        }
    },
    getAll: async () => {
        try{
            let todos = await prisma.todo.findMany()
            return todos
        }catch(err){
            console.log(err);
        }
    },
    findById: async (id) => {
        try{
            let todo = await prisma.todo.findUnique({
                where:{
                    id: id
                }
            })
            return todo
        }catch(err){
            console.log(err);
        }
    },
    update: async (id,data) => {
        try{
            let todoUpdate = await prisma.todo.update({
                where: {
                    id: id
                },
                data
            })
            return todoUpdate
        }catch(err){
            console.log(err);
        }
    },
    delete: async (id) => {
        try{
            let todoDelete = await prisma.todo.delete({
                where: {
                    id: id
                }
            })
            return todoDelete
        }catch(err){
            console.log(err);
        }
    }

}