import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import CustomInput from "../CustomInput/CustomInput";

import "./Board.css";


function Board(props) {
  const {
    board,
    addCard,
    removeBoard,
    removeCard,
    onDragEnd,
    onDragEnter,
    updateCard,
  } = props;

  return (
    <div className="board">
      <div className="board-inner" key={board?.id}>
        <div className="board-header">
          <p className="board-header-title">
            {board?.title}
            <span>{board?.cards?.length || 0}</span>
          </p>
        </div>
        <div className="board-cards custom-scroll">
          {board?.cards?.map((item) => (
            <Card
              key={item.id}
              card={item}
              boardId={board.id}
              removeCard={removeCard}
              onDragEnter={onDragEnter}
              onDragEnd={onDragEnd}
              updateCard={updateCard}
            />
          ))}
          <CustomInput
            text="+ Add Card"
            placeholder="Enter Card Title"
            displayClass="board-add-card"
            editClass="board-add-card-edit"
            id={board?.id}
            onDragEnter={onDragEnter}
            onSubmit={(value) => addCard(board?.id, value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
