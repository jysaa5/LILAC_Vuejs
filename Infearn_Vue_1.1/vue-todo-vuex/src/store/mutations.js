  const addOneItem = (state, todoItem) => {
      console.log('received')
      const obj = {
          completed: false,
          item: todoItem
      };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItemes.push(obj)
  }
  const removeOneItem = (state, payload) => {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItemes.splice(payload.index, 1);
  }
  const toggleOneItem = (state, payload) => {
      // todoItem.completed = !todoItem.completed;
      state.todoItemes[payload.index].completed = !state.todoItemes[payload.index].completed;
      // 로컬 스토리지의 데이터를 갱신
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  }
  const clearAllItemes = (state) => {
      localStorage.clear();
      state.todoItemes = [];
  }

  export {
      addOneItem,
      removeOneItem,
      toggleOneItem,
      clearAllItemes
  }