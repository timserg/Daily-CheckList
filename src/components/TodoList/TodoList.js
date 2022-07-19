import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import style from './TodoList.module.css';

function TodoList ({ todo, setTodo }) {
  // console.log('$$$', todo);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

  console.log('^^^', edit);
  // Функция удаления 
  function deleteTodo(id){
    let newTodo = [...todo].filter(item => item.id !== id)
    setTodo(newTodo)
  }

  function statusTodo(id){
    let newTodo = [...todo].filter(item => {
      if(item.id === id){
        item.status = !item.status;
      }
      return item;
    })
    setTodo(newTodo)
    }
  // Функция замены
  function editTodo(id, title){
    setEdit(id)
    setValue(title)
  }
  // Сохраняем замену
  function saveTodo(id){
    let newTodo = [...todo].filter(item => {
      if(item.id === id){
        item.title = value;
      }
      return item;
    })
    setTodo(newTodo);
    setEdit(null);
    }
  


  return (
    <div>
      {
        todo.map(item => (
          <div key={item.id} className={style.listItems}>
            {
              edit === item.id ? 
                <div>
                  <input value={value} onChange={(e)=> setValue(e.target.value)} />
                </div> :
                <div>{item.title}</div>         
            }

            {
              edit === item.id ? 
                <div>
                  <Button onClick={ ()=>saveTodo(item.id) }>Cохранить</Button>
                </div> :
                <div>
                  <Button onClick={ ()=>deleteTodo(item.id) }>Удалить</Button>
                  <Button onClick={ ()=>editTodo(item.id, item.title) } className={style.btn}>Изменить</Button>
                  <Button onClick={ ()=>statusTodo(item.id) } className={style.btn}>
                    { 
                    item.status ? '-' : '+'
                    }
                  </Button>
                </div>

            }
          </div>    
        ))
      }
    </div>
  )
}


export default TodoList;
