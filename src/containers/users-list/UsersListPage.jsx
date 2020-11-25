import React, { useState, useEffect } from "react";
import "./UsersListPage.css";
import { getUsers } from "../../api/httpCall";
import { Header } from "../../components/header/Header";
import { Search } from "../../components/search/Search";
import { UserList } from "../../components/list/UserList";

export const UsersListPage = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState();
  const [searchInput, setSearchInput] = useState();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (users) {
      filterUsers(searchInput);
    }
  }, [searchInput]);

  const getData = async () => {
    const usersResponse = await getUsers();

    setUsers(usersResponse);
    setFilteredUsers(usersResponse);
  };

  const filterUsers = (input) => {
    if (!input) {
      setFilteredUsers(users);
    }

    const searchedUsers = users.filter(
      (user) =>
        user.name.toLowerCase().startsWith(input.toLowerCase()) ||
        user.surname.toLowerCase().startsWith(input.toLowerCase())
    );

    setFilteredUsers(searchedUsers);
  };

  return (
    <div>
      <Header />
      <Search onChange={setSearchInput} />
      <UserList className="user-list" items={filteredUsers} />
    </div>
  );
};
