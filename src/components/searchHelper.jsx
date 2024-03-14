//import { SearchDataType } from "@/pages/Search/SearchEmployee";
//import { getTokenFromLocalStorage } from "../utility";

import SearchEmployee from "./SearchEmployee";

export const searchApi = async (queryParam, query) => {
  //console.log("SearchApi: ", queryParam, query);
  // let token = getTokenFromLocalStorage();
  // if (!token) {
  //   alert("token does not exist");
  //   return;
  // }
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify({ query }), // Convert data to JSON string
  };

  // kye -> comm/name/dsf
  // https://localhost:400/employees/search?key=value
  let res;
  if (queryParam === "name") {
    res = await fetch(`http://localhost:8080/employees/search/${query}`);
  } else if (queryParam === "community") {
    res = await fetch(`http://localhost:8080/communities/search/${query}`);
    console.log("comm u", res);
  } else {
    res = await fetch(`http://localhost:8080/tags/search/${query}`);
  }

  const jsonRes = await res.json();

  console.log("res is api : ", jsonRes);
  return jsonRes;
};

let timeoutId;

export const debounce = async (query, queryParam, setResults, delay) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(async () => {
    let a = await searchApi(queryParam, query);
    setResults(a);
    console.log("a is search : ", a);
  }, delay);
};
