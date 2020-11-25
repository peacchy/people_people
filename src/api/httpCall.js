import { mapResponseItemToUser } from "./mapResponseItemToUser";

export const getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.map(mapResponseItemToUser);
    });
};
