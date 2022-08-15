import React, { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


function TaskForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title,
            description
        })
        setTitle('')
        setDescription('')
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className=' bg-slate-800 p-10 mb-4'>
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                <input className='bg-slate-300 p-3 w-full mb-2' placeholder='Escribe tu tarea' name='title' value={title} onChange={(e) => handleChangeTitle(e)} autoFocus />
                <textarea className='bg-slate-300 p-3 w-full mb-2' placeholder='Escribe tu descripcion' name='description' value={description} onChange={(e) => handleChangeDescription(e)} />
                <button className='bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-900 duration-300 rounded-md'>
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm



















// import React, { useState } from 'react'

// function TaskForm({createTask}) {

//     const [task, setTask] = useState({
//         id: '',
//         title: '',
//         description: ''
//     })

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         let newTask = {
//             id: task.id,
//             title: task.title,
//             description: task.description
//         }
//         createTask(newTask)
//     }

//     const handleChange = (e) => {
//         setTask({
//             ...task,
//             [e.target.name]: e.target.value
//         })
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input placeholder='Escribe tu id' name='id' value={task.id} onChange={ (e) => handleChange(e)} />
//             <input placeholder='Escribe tu task' name='title' value={task.title} onChange={ (e) => handleChange(e)} />
//             <input placeholder='Escribe tu descripcion' name='description' value={task.description} onChange={ (e) => handleChange(e)} />
//             <button>
//                 Guardar
//             </button>
//         </form>
//     )
// }

// export default TaskForm