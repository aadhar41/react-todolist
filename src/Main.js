import React, { useState } from 'react'

export default function Main() {

    const [taskname, settaskname] = useState("");
    const [tasklist, settasklist] = useState([])

    function addtask() {
        settasklist([...tasklist, taskname])
    }

    function deletetask(index) {
        var duparray = [...tasklist]
        duparray.splice(index, 1)
        settasklist(duparray)
    }

    const tasklistcontent = tasklist.map((task, index) => {
        return(
            <div>
                <p>{task}</p>
                <i class="far fa-trash-alt" onClick={() => deletetask(index)} ></i>
            </div>
        )
    })

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow p-3 mb-5 bg-white rounded">
                    <h1>React TODO LIST</h1>
                    <input type="text" className="form-control" placeholder="Enter Task" value={taskname} onChange={(e) => {settaskname(e.target.value)}} />
                    <button className="btn btn-success" onClick={addtask} >Add</button>
                    <br/>
                    {tasklistcontent}
                </div>
            </div>
        </div>
    )
}
