import { ApiMockResponse } from "../ApiMockData/dummyData";



export class BoardAPI {
  async fetchBoardList(id){
    const apiData = ApiMockResponse;
    let BoardList = [];
    if (localStorage.getItem(id)) {
      const localStorageData = JSON.parse(
        localStorage.getItem(id) ?? "",
      );
      BoardList = [...localStorageData];
    } else {
      BoardList = [...apiData];
      // setProjectsList(id)
      updateLocalStorageBoards(BoardList, id);
    }

    return BoardList;
  }
}


export async function fetchBoardList(id) {
  const api = new BoardAPI();
  return api.fetchBoardList(id);
}

export async function getProjectsList() {
  if(localStorage.getItem("Projects")){
    const localStorageDataList = JSON.parse(
      localStorage.getItem("Projects") ?? "",
    );
    return localStorageDataList
  }
  return [];
}
export async function setProjectsList(id) {
  if(localStorage.getItem("Projects")){
    const localStorageDataList = JSON.parse(
      localStorage.getItem("Projects") ?? "",
    );
    localStorage.setItem("Projects", JSON.stringify([...localStorageDataList, id ]));
  }else{
    localStorage.setItem("Projects", JSON.stringify([id]));
  }
}

export function updateLocalStorageBoards(boards, id) {
  localStorage.setItem(id, JSON.stringify(boards));
}
