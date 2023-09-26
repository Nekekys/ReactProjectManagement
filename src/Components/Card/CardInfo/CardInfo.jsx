import React, { useEffect, useState } from "react";
import { Calendar, CheckSquare, Circle, List, MessageSquare, Tag, Trash, Type } from "react-feather";
import { colorsList } from "../../../Helper/Util";
import Modal from "../../Modal/Modal";
import CustomInput from "../../CustomInput/CustomInput";

import "./CardInfo.css";
import Chip from "../../Common/Chip";

function CardInfo(props) {
  const { onClose, card, boardId, updateCard } = props;
  const [selectedColor, setSelectedColor] = useState("");
  const [numberComment, setNumberComment] = useState(0);
  const [depthComment, setDepthComment] = useState(0);
  const [cardValues, setCardValues] = useState({
    ...card,
  });

  const updateTitle = (value) => {
    setCardValues({ ...cardValues, title: value });
  };

  const updateDesc = (value) => {
    setCardValues({ ...cardValues, desc: value });
  };

  const addComment = (value) => {
    if(numberComment === 0 &&  depthComment === 0){
      setCardValues({ ...cardValues, comments: [ ...cardValues.comments, {comment: value, number: cardValues.comments.length + 1, depth: 0 }] });
    }else{
      const cards = [...cardValues.comments]
      const filterCard = cards.map(elem => {
        if (elem.number > numberComment) return {...elem, number: elem.number + 1}
        else return elem
      })
      filterCard.push({comment: value, number: numberComment + 1, depth: depthComment })
      const SortedCard = filterCard.sort( (a, b) => a.number - b.number)
      setCardValues({  ...cardValues, comments: SortedCard })
    }
  };
  const clearComment = (value) => {
    setNumberComment(0)
    setDepthComment(0)
  };

  const changeCommentAnswer = (number,depth) => {
    setNumberComment(number)
    setDepthComment(depth + 1)
  }



  const addLabel = (label) => {
    const index = cardValues.labels.findIndex(
      (item) => item.text === label.text,
    );
    if (index > -1) return;

    setSelectedColor("");
    setCardValues({
      ...cardValues,
      labels: [...cardValues.labels, label],
    });
  };

  const removeLabel = (label) => {
    const tempLabels = cardValues.labels.filter(
      (item) => item.text !== label.text,
    );

    setCardValues({
      ...cardValues,
      labels: tempLabels,
    });
  };

  const addTask = (value) => {
    const task = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setCardValues({
      ...cardValues,
      tasks: [...cardValues.tasks, task],
    });
  };

  const removeTask = (id) => {
    const tasks = [...cardValues.tasks];

    const tempTasks = tasks.filter((item) => item.id !== id);
    setCardValues({
      ...cardValues,
      tasks: tempTasks,
    });
  };

  const updateTask = (id, value) => {
    const tasks = [...cardValues.tasks];

    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;

    tasks[index].completed = Boolean(value);

    setCardValues({
      ...cardValues,
      tasks,
    });
  };

  const calculatePercent = () => {
    if (!cardValues.tasks?.length) return 0;
    const completed = cardValues.tasks?.filter(
      (item) => item.completed,
    )?.length;
    return (completed / cardValues.tasks?.length) * 100;
  };

  const updateDate = (date) => {
    if (!date) return;

    setCardValues({
      ...cardValues,
      date,
    });
  };

  useEffect(() => {
    if (updateCard) updateCard(boardId, cardValues.id, cardValues);
  }, [cardValues]);

  const calculatedPercent = calculatePercent();

  return (
    <Modal onClose={onClose}>
      <div className="cardinfo">
        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Type />
            <p>Title</p>
          </div>
          <CustomInput
            defaultValue={cardValues.title}
            text={cardValues.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <List />
            <p>Description</p>
          </div>
          <CustomInput
            defaultValue={cardValues.desc}
            text={cardValues.desc || "Add a Description"}
            placeholder="Enter description"
            onSubmit={updateDesc}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Calendar />
            <p>Date</p>
          </div>
          <input
            type="date"
            defaultValue={cardValues.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Tag />
            <p>Labels</p>
          </div>
          <div className="cardinfo-box-labels">
            {cardValues.labels?.map((item, index) => (
              <Chip key={index} item={item} removeLabel={removeLabel} />
            ))}
          </div>
          <ul>
            {colorsList.map((item, index) => (
              <li
                key={index}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? "li-active" : ""}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </ul>
          <CustomInput
            text="Add Label"
            placeholder="Enter label text"
            onSubmit={(value) =>
              addLabel({ color: selectedColor, text: value })
            }
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <CheckSquare />
            <p>Tasks</p>
          </div>
          <div className="cardinfo-box-progress-bar">
            <div
              className="cardinfo-box-progress"
              style={{
                width: `${calculatedPercent}%`,
                backgroundColor: calculatedPercent === 100 ? "limegreen" : "",
              }}
            />
          </div>
          <div className="cardinfo-box-task-list">
            {cardValues.tasks?.map((item) => (
              <div key={item.id} className="cardinfo-box-task-checkbox">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateTask(item.id, event.target.checked)
                  }
                />
                <p className={item.completed ? "completed" : ""}>{item.text}</p>
                <Trash onClick={() => removeTask(item.id)} />
              </div>
            ))}
          </div>
          <CustomInput
            text={"Add a Task"}
            placeholder="Enter task"
            onSubmit={addTask}
          />
        </div>
        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <MessageSquare />
            <p>Comments</p>
          </div>
          <div className="cardinfo-box-comments">
            {cardValues.comments.map(e => <div key={e.number} className="item"><div>{[...Array(e.depth)].map((item, index) => <Circle className="circle" key={index} /> ) }</div><p>{e.comment}</p><span onClick={() => changeCommentAnswer(e.number,e.depth)}>Answer</span></div>)}
          </div>
          <div>
            <CustomInput
              text={depthComment === 0 ? "Add a Comment" : "Answer"}
              placeholder="Enter comment"
              onSubmit={addComment}
              clearComment={clearComment}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
