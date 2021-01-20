import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  // Defined function here and passing as props(passNote) into the CreateNote component
  const addNote = (note) => {
    // alert("I am clicked");
    setAddItem((prevData) => {
      return [...prevData, note]; //storing note object inside a array of objects
      console.log(note);
    });
  };

  const onDelete=(id)=>{
setAddItem((oldData)=>
    oldData.filter((currData,indx)=>{
        return indx!==id;
    })
)
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {
          addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })
      }
      <Footer />
    </>
  );
};

export default App;
