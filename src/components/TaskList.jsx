import React, { useContext } from 'react'
import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'

function TaskList() {

    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className='text-5xl font-bold text-center text-white mt-10 uppercase'>No hay tareas aun.!</h1>
    }

    return (
        <div className='grid grid-cols-4 gap-2'>
            {
                tasks && tasks.map(({ id, title, description }) => (
                    <TaskCard
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                    />
                ))
            }
        </div>
    )
}

export default TaskList