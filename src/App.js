import React, { useState } from "react";
import { observer } from "mobx-react";
import listStore from "./Store/ListStore";

const App = () => {
  const [userName, setUserName] = useState("song toan");
  const renderName = () => {
    return (
      <div>
        {listStore.listName.map((item) => {
          return (
            <p key={item.id}>
              {item.id}:{item.userName}
              <button onClick={() => listStore.deleteName(item.id)}>X</button>
            </p>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <input
        required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => listStore.saveName(userName, setUserName)}>
        submit
      </button>
      {renderName()}
    </div>
  );
};

export default observer(App);
