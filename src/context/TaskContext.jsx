import React, { createContext, useEffect, useState } from 'react'
import { task } from '../tasks.js'

export const TaskContext = createContext()

export function TaskContextProvider({ children }) {

    const [tasks, setTasks] = useState([])

    const createTask = ({ title, description }) => {
        setTasks([...tasks, {
            title: title,
            id: tasks.length,
            description: description
        }])
    }

    const deleteTask = (id) => {
        const task = tasks.map(item => item.id === id)
        if (task) {
            const newList = tasks.filter(item => item.id !== id)
            setTasks(newList)
        }
    }

    useEffect(() => {
        setTasks(task)
    }, [])


    return (
        <TaskContext.Provider value={{
            createTask,
            deleteTask,
            tasks
        }}>
            {children}
        </TaskContext.Provider>
    )
}