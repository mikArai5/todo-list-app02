import { useState } from 'react';
import './style.css';

export const Todo = () => {
  const [ todos, setTodos ] = useState([]);
  const [ todoText, setTodoText ] = useState("");
  const [ isClick, setIsClick ] = useState(false);

  const onChangeTodoText = (e: any) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos: any = [...todos, todoText];
    setTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsClick(false);
  }

  const onClickEdit = () => {
    setIsClick(true);
  }

  const handleBlur = () => {
    setIsClick(false);
  }

  const handleEdit = (e: any) => {
    setTodos(e.target.value);
  }

  return (
    <>
    <div className='add_list'>
      <input type="text" placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText}/>
      <button onClick={onClickAdd}>追加</button>
    </div>
    <div>
      <p>TODOリスト</p>
      <ul>
        {todos.map((todo: any, index: number) => (
            <li key={todo.id} className='task'>
              <div>
                <div className='task_data'>
                  <span>No.{index}</span>
                  {isClick ? 
                  <form onSubmit={handleSubmit} >
                    <input 
                    className='taskEditInput' 
                    autoFocus
                    type="text" 
                    onChange={(e: any) => handleEdit(e.target.value)}
                    onBlur={handleBlur}
                    value={todo}
                    maxLength={10}
                    />
                  </form> : <span>{todo}</span>
                  }
                </div>
                <button onClick={() => onClickDelete(index)}>削除</button>
                <button onClick={onClickEdit}>更新</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
    </>
  )
}
