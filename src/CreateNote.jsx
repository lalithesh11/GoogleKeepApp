import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });

    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const backToNormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note">
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            ></input>
          ) : null}

          <textarea
            rows=""
            name="content"
            column=""
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note...."
            onClick={expandIt}
            onDoubleClick={backToNormal}
          ></textarea>

          {expand ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign"></AddIcon>
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
