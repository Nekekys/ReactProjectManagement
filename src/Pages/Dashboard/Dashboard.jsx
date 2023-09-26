import React, { useEffect, useState } from "react";
import Board from "../../Components/Board/Board";
import "./Dashboard.css";
import { NavLink, useParams } from "react-router-dom";
import { fetchBoardList, updateLocalStorageBoards } from "../../Helper/APILayers";

function Dashboard() {
  const [boards, setBoards] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const boards = await fetchBoardList(id);
    setBoards(boards);
  }
  const [targetCard, setTargetCard] = useState({
    boardId: 0,
    cardId: 0,
  });

  const removeBoard = (boardId) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    tempBoardsList.splice(boardIndex, 1);
    setBoards(tempBoardsList);
  };

  const addCardHandler = (boardId, title) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];

    let count = 0;
    for (let key in tempBoardsList) {
      count+= tempBoardsList[key].cards.length
    }

    const currentDate = new Date()

    tempBoardsList[boardIndex].cards.push({
      id: Date.now() + Math.random() * 2,
      number: count + 1,
      title,
      labels: [],
      date: currentDate.toISOString().split('T')[0],
      tasks: [],
      desc: "",
      comments: []
    });
    setBoards(tempBoardsList);
  };

  const removeCard = (boardId, cardId) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoardsList);
  };

  const updateCard = (boardId, cardId, card) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    tempBoardsList[boardIndex].cards[cardIndex] = card;

    setBoards(tempBoardsList);
  };

  const onDragEnd = (boardId, cardId) => {
    const sourceBoardIndex = boards.findIndex(
      (item) => item.id === boardId,
    );
    if (sourceBoardIndex < 0) return;

    const sourceCardIndex = boards[sourceBoardIndex]?.cards?.findIndex(
      (item) => item.id === cardId,
    );
    if (sourceCardIndex < 0) return;

    const targetBoardIndex = boards.findIndex(
      (item) => item.id === targetCard.boardId,
    );
    if (targetBoardIndex < 0) return;

    const targetCardIndex = boards[targetBoardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cardId,
    );

    const tempBoardsList = [...boards];
    const sourceCard = tempBoardsList[sourceBoardIndex].cards[sourceCardIndex];
    tempBoardsList[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
    tempBoardsList[targetBoardIndex].cards.splice(
        targetCardIndex,
        0,
        sourceCard,
    );
    setBoards(tempBoardsList);


    setTargetCard({
      boardId: 0,
      cardId: 0,
    });
  };

  const onDragEnter = (boardId, cardId) => {
    if (targetCard.cardId === cardId) return;
    if(cardId){
      setTargetCard({
        boardId: boardId,
        cardId: cardId,
      });
    }else{
      setTargetCard({
        ...targetCard,
        boardId: boardId
      });
    }

  };

  useEffect(() => {
    updateLocalStorageBoards(boards, id);
  }, [boards]);

  return (
    <div className="app">
      <div className="app-nav">
        <NavLink to="/#" >Projects</NavLink>
        <span>&nbsp;/ {id}</span>
      </div>
      <div className="app-boards-container">
        <div className="app-boards">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCardHandler}
              removeBoard={() => removeBoard(item.id)}
              removeCard={removeCard}
              onDragEnd={onDragEnd}
              onDragEnter={onDragEnter}
              updateCard={updateCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
