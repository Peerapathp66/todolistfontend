'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect, Fragment } from 'react'


function page2() {
    const router = useRouter();
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [editingTaskIndex, setEditingTaskIndex] = useState(null);
    const [editedTaskName, setEditedTaskName] = useState("");

    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    }

    const handleAddTask = () => {
        if (taskName.trim() === "") {
            alert("Please Enter a Task");
            return;
        }

        setTasks([...tasks, taskName]);
        setTaskName("");
    }

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    const handleEditClick = (index, task) => {
        setEditingTaskIndex(index);
        setEditedTaskName(task);
    }

    const handleSaveEdit = () => {
        if (editedTaskName.trim() === "") {
            alert("Please Enter a Task");
            return;
        }

        const updatedTasks = [...tasks];
        updatedTasks[editingTaskIndex] = editedTaskName;
        setTasks(updatedTasks);

        setEditingTaskIndex(null);
        setEditedTaskName("");
    }

    return (
        <div className="container">
            <div id="newtask">
                <input
                    className='textre'
                    type="text"
                    placeholder="Text"
                    value={taskName}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddTask}>Add</button>
            </div>

            <div id="tasks">
                {tasks.map((task, index) => (
                    <div className="task" key={index}>
                        {editingTaskIndex === index ? (
                            <>
                                <input className='textre2'
                                    type="text"
                                    value={editedTaskName}
                                    onChange={(e) => setEditedTaskName(e.target.value)}
                                />
                                <button className="save" onClick={handleSaveEdit}>Save</button>
                            </>
                        ) : (
                            <>
                                <span className="taskname">{task}</span>
                                <button className="edit" onClick={() => handleEditClick(index, task)}>
                                    <span className=''>EDIT</span>
                                </button>
                                <button className="delete" onClick={() => handleDeleteTask(index)}>
                                    <span>DEL</span>
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default page2