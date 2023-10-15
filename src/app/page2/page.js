'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect, Fragment } from 'react'
import Pluem from '../component/pluem'


export default function Page2() {
    const searchParams = useSearchParams()
    const username = searchParams.get('username')
    const [tasks, setTasks] = useState([]);

    const [taskName, setTaskName] = useState("");
    const [editingTaskIndex, setEditingTaskIndex] = useState(null);
    const [editedTaskName, setEditedTaskName] = useState("");
    const [tasks2, setTasks2] = useState([{ id: 1, taskName: null }]);


    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    }

    const handleAddTask = () => {
        if (taskName.trim() === "") {
            alert("Please Enter a Task");
            return;
        }
        setTasks([...tasks, taskName]);
        setTaskName(""); // Clear input after adding task
    }

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
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
    useEffect(() => {

        console.log(username)
    }, []);
    return (



        <div className="bg-blue-500  min-h-screen">
            <Pluem />
            <div className="container mx-auto px-4 py-20 w-[50%] ">
                <Pluem />
                <div className="bg-white px-auto py-auto rounded-lg ">
                    <Pluem usernamexx={username} />
                    <div className="flex items-center justify-between mb-4 h-20  ">
                        <div>
                        </div>
                        <input
                            className='ml-5 bg-white text-black block  h-16  w-full text-left pl-6 border-b-2 border-gray-300 box-border '
                            type="text"
                            placeholder="Text"
                            onChange={handleInputChange}
                        />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-7" onClick={handleAddTask}>
                            Add
                        </button>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-lg mt-8">
                    {tasks.map((task, index) => (
                        <div className=" flex items-center justify-between mb-4 border-b-2 border-gray-300 box-border " key={index}>
                            {editingTaskIndex === index ? (
                                <>
                                    <input className='  w-4/5 text-xl  border-none text-black  font-bold '
                                        type="text"
                                        value={editedTaskName}
                                        onChange={(e) => setEditedTaskName(e.target.value)}
                                    />
                                    <button className=" bg-blue-500 text-white font-bold   rounded py-2 px-4" onClick={handleSaveEdit}>
                                        Save
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span className=" text-xl">{task}</span>
                                    <div>

                                        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 " onClick={() => handleEditClick(index, task)}>
                                            EDIT
                                        </button>
                                        <button className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteTask(index)}>
                                            DEL
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}