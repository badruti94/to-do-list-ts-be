import { Request, Response } from "express"

interface Task {
    id: number;
    title: string;
    description: string;
    status: boolean;
};
interface ResponseJson {
    message?: string;
};

let tasks: Task[] = [];

const createTask = (req: Request, res: Response) => {
    const task: Task = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        status: false
    }

    tasks.push(task)

    const responseJson: ResponseJson = {
        message: 'Berhasil tersimpan',
    };
    res.status(201).json(responseJson);
}

const getAllTask = (req: Request, res: Response) => {
    res.status(200).json(tasks);
}

const setTaskDone = (req: Request, res: Response) => {
    const id: string = req.params.id;

    tasks = tasks.map(task => {
        if (task.id === parseInt(id)) {
            return {
                ...task,
                status: true,
            }
        }else{
            return task
        }
    });

    const responseJson: ResponseJson = {
        message: 'Done'
    };

    res.status(200).json(responseJson);
}

const deleteTask = (req: Request, res: Response) => {
    const id: string = req.params.id;

    tasks = tasks.filter(task => task.id !== parseInt(id));

    const responseJson: ResponseJson = {
        message: 'Berhasil dihapus'
    };

    res.status(200).json(responseJson);
}

export {createTask, getAllTask, setTaskDone, deleteTask}