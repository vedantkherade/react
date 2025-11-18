import { useState } from "react";

function One() {
    let [items, setItems] = useState([]);
    let [tasks, setTasks] = useState(["Task 1", "Task 2"]);

    let [form, setForm] = useState({name: "", age: ""});

    let [num, setNum] = useState(0);

    return (
        <div>
            <button onClick={() => setItems([...items, `Item ${items.length+1} `])}>Add Item</button>
            <p>{items}</p>

            <button onClick={() => setTasks(tasks.filter((task) => task !== "Task 1"))}>Remove task 1</button>

            <p>{tasks}</p>

            <input
                type="text"
                placeholder="Name"
                onChange={(e) => setForm({...form, name: e.target.value})}           
            />

            <input
                type="text"
                placeholder="Age"
                onChange={(e) => setForm({...form, age: e.target.value})}
            />

            <p>{form.name}-{form.age}</p>

            <button onClick={() => setNum(Math.floor(Math.random() * 100))}>Generate</button>
            <p>{num}</p>
        </div>
    )
}

export default One;


// item 1
// item 2
// item 3

{/* <button>remove item 1</button> */}