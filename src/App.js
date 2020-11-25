import { useEffect } from "react";
import "./App.css";
import React from "react";
import { UsersListPage } from "./containers/users-list/UsersListPage";

const App = () => {
  return (
    <div className="App">
      <UsersListPage />
    </div>
  );
};

export default App;
