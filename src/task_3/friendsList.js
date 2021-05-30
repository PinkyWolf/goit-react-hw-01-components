import React from "react";
import Friends from "../components/friends";

const FriendList = ({ items }) => (
  <ul>
    {items.map((friends) => (
      <li key={items.id}>
        <Friends
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
        />
      </li>
    ))}
  </ul>
);
export default FriendList;
