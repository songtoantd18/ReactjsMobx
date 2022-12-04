// editName = (id, userName, setUserName) => {
//   const indexName = this.listName.findIndex((item) => item.id === id);
//   console.log("this.listName[indexName].id:", this.listName[indexName].id);
//   console.log(
//     "this.listName[indexName].userName:",
//     this.listName[indexName].userName
//   );
//   setUserName(this.listName[indexName].userName);
//   this.listName = this.listName.map((item) => {
//     if (item.id === indexName) {
//       item.userName = setUserName(this.listName[indexName].userName);
//     }
//     return item;
//   });
// };
///////////////
// this.listName.map((item) => {
//   if (item.id === indexName) {
//     item.userName = "ok123";
//   }
// });
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
  saveName = (userName, setUserName, id) => {
    this.listName.push({
      id:
        this.listName.length === 0
          ? 0
          : this.listName[this.listName.length - 1].id + 1,
      userName,
    });
    // this.listName = this.listName.map((item) => {
    //   if (item.id === id) {
    //     setUserName(
    //       );
    setUserName("");
  };
  deleteName = (id) => {
    // const indexName = this.listName.findIndex((item) => item.id === id); xoa theo index
    // this.listName.splice(indexName, 1);
    console.log("id:", id);
    this.listName = this.listName.filter((item) => item.id !== id); // xoa theo id
  };
  editName = (id, userName, setUserName) => {
    // console.log("id:", id);
    // const takeValue = this.listName.find((item) => item.id === id);
    this.listName = this.listName.map((item) => {
      if (item.id === id) {
        setUserName("ok1234");
        item.userName = userName;
      }
      return item;
    });
    // setUserName("ok123");
    // const indexUser = this.listName.findIndex((item) => item.id === id);
    // console.log("indexUser:", indexUser);
    // console.log("this.listName[indexName].id:", this.listName[indexName].id);
    // console.log(
    //   "this.listName[indexName].userName:",
    //   this.listName[indexName].userName
    // );

    //////////////////
    // this.listName.map((item) => {
    //   if (item.id === indexName) {
    //     item.userName = setUserName(this.listName[indexName].userName);
    //   }
    // });

    /////////////////
    //   setUserName(this.listName[indexUser].userName);
    //   this.listName = this.listName.map((item) => {
    //     if (item.id === indexUser) {
    //       item.userName = this.listName[indexUser].userName;
    //     }
    //     return item;
    //   });
    // };
  };
}
const listStore = new ListStore();
export default listStore;
