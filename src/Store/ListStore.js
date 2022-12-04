import { makeObservable, observable, action } from "mobx";
class ListStore {
  listName = [];
  constructor() {
    makeObservable(this, {
      listName: observable,
      saveName: action,
      deleteName: action,
    });
  }
  saveName = (userName, setUserName) => {
    this.listName.push({
      id:
        this.listName.length === 0
          ? 0
          : this.listName[this.listName.length - 1].id + 1,
      userName,
    });
    setUserName("");
  };
  deleteName = (id) => {
    const indexName = this.listName.findIndex((item) => item.id === id);
    this.listName.splice(indexName, 1);
  };
}
const listStore = new ListStore();
export default listStore;
