import React from "react";
import friendsTmp from "./friends.json";
import FriendList from "./friendsList";

const App = () => {
  return (
    <div>
      <FriendList items={friendsTmp} />
    </div>
  );
};

export default App;
