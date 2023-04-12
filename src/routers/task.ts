import express from 'express'
import { createTask, deleteTask, getAllTask, setTaskDone } from '../controllers/task'

const router = express.Router()

router.get('/', getAllTask)
router.post('/', createTask)
router.patch('/:id/done', setTaskDone)
router.delete('/:id', deleteTask)

export default router