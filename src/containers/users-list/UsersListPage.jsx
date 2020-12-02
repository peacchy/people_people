import React, { useState, useEffect } from "react";
import "./UsersListPage.css";
import { getUsers } from "../../api/httpCall";
import { Header } from "../../components/header/Header";
import { Search } from "../../components/search/Search";
import { UserList } from "../../components/user-list/UserList";
import { renderUser } from "./renderUser";
import { List } from "../../components/list/List";

export const UsersListPage = () => {
  // const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState();
  const [searchInput, setSearchInput] = useState("");

  const lowSearchInput = searchInput.toLowerCase();

  const usersFilteredByName =
    users?.filter(
      (user) =>
        user.name.toLowerCase().includes(lowSearchInput) ||
        user.surname.toLowerCase().includes(lowSearchInput)
    ) || [];

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   if (users) {
  //     filterUsers(searchInput);
  //   }
  // }, [searchInput]);

  const getData = async () => {
    const usersResponse = await getUsers();

    setUsers(usersResponse);
    // setFilteredUsers(usersResponse);
  };

  // const filterUsers = (input) => {
  //   if (!input) {
  //     setFilteredUsers(users);
  //   }

  //   const searchedUsers = users.filter(
  //     (user) =>
  //       user.name.toLowerCase().includes(input.toLowerCase()) ||
  //       user.surname.toLowerCase().includes(input.toLowerCase())
  //   );

  //   setFilteredUsers(searchedUsers);
  // };

  return (
    <div>
      <Header />
      <Search onChange={setSearchInput} placeholder="Search by user name..." />
      {/* <UserList className="user-list" users={usersFilteredByName} /> */}
      <List
        className="user-list"
        items={usersFilteredByName}
        onItemRender={renderUser}
      />
    </div>
  );
};
