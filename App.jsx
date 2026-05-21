import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addData = () => {

    if(name === "") return;

    if(editIndex !== null){

      const updatedData = [...data];
      updatedData[editIndex] = name;

      setData(updatedData);
      setEditIndex(null);

    } else {

      setData([...data, name]);
    }

    setName("");
  };

  const deleteData = (index) => {

    const newData = data.filter((item, i) => i !== index);

    setData(newData);
  };

  const editData = (index) => {

    setName(data[index]);
    setEditIndex(index);
  };

  return (

    <div style={{padding:"20px"}}>

      <h2>CRUD App</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addData}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul>

        {data.map((item, index) => (

          <li key={index}>

            {item}

            <button onClick={() => editData(index)}>
              Edit
            </button>

            <button onClick={() => deleteData(index)}>
              Delete
            </button>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;