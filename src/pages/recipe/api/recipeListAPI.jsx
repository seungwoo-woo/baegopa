import axios from "axios";

export const getRecipes = async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/leehoeeun/storage/recipeLists');
    console.log(response.data);
    if (response.status === 200) { //요청 시 200 OK 일 때만 결과를 리턴되도록 조건문 추가
      return response.data;
    } else {  // 요청 시 200이 아닌 다른 결과를 return해올 경우
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};

export const getRecipeById = async (docId) => {
  try {
    const response = await axios.get(`https://my-json-server.typicode.com/leehoeeun/storage/recipeLists/${docId}`);  // http://localhost:4000/products/4 브라우저에서 검색 시 데이터 확인할 수 있음
    if (response.status === 200) { //요청 시 200 OK 일 때만 결과를 리턴되도록 조건문 추가
      return response.data;
    } else {  // 요청 시 200이 아닌 다른 결과를 return해올 경우
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) { // 서버가 죽었거나, 인터넷이 끊겼거나, URL이 잘못됐을 때 등
    console.error(error);
    throw error;
  }
};