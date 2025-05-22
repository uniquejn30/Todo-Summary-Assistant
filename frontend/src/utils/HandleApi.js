import axios from 'axios';

const baseUrl = "http://localhost:3000";

// Fetch all todos
const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then((data) => {
      console.log('data --->', data);
      setToDo(data);
    })
    // .catch((err) => console.error('Error fetching todos:', err));
};

// Add a new todo
const addToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    // .catch((err) => console.error('Error adding todo:', err));
};

// Update an existing todo
// const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
//   axios
//     .patch(`${baseUrl}/update`, { _id: toDoId, text })
//     .then(() => {
//       setText("");
//       setIsUpdating(false);
//       getAllToDo(setToDo);
//     })
//     .catch((err) => console.error('Error updating todo:', err));
// };

export { getAllToDo, addToDo};
