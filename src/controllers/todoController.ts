import express, { Request, Response } from 'express';

// Definition des Todo-Interfaces
interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

// In-Memory-Datenspeicher für die To-Dos
let todos: Todo[] = [];

// Constant des todoCotroller Modules zum Abrufen aller To-Dos
export const getTodos = (req: Request, res: Response) => {
    res.json(todos);
};

// Constant des todoCotroller Modules zum Hinzufügen eines neuen To-Dos
export const createTodo = (req: Request, res: Response) => {
    const newTodo: Todo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

// Constant des todoCotroller Modules zum Löschen eines To-Dos nach ID
export const deleteTodo = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).send();
};