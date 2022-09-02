import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import AddBtn from '../assets/icons/add.svg';

export default function Tasks() {
  const [tasks, reciveTasks] = useState('');
  const [task, newTask] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/list').then((response) => {
      reciveTasks(response.data);
    });
  }, []);

  function createTask() {
    const arr = {
      id: uuidv4(),
      title: task,
      date: new Date(),
    };

    console.log(arr);
  }

  return (
    <section className="list">
      <h2 className="list__title title">Tasks</h2>
      <div className="list__create-block">
        <input
          className="list__input-text input-text"
          type="text"
          name="title"
          value={task}
          onChange={(event) => newTask(event.target.value)}
        />
        <select>
          <option>Пункт 1</option>
          <option>Пункт 2</option>
        </select>
        <button className="list__btn-create btn" onClick={() => createTask()}>
          <img src={AddBtn} alt="create label" />
        </button>
      </div>
      <div className="task-list">
        <div className="task">
          <p className="task__title">Название задачи</p>
          <p className="task__category">Категория</p>
          <p className="task__date">Дата</p>
        </div>
        <div className="task">
          <p className="task__title">Название задачи</p>
          <p className="task__category">Категория</p>
          <p className="task__date">Дата</p>
        </div>
        <div className="task">
          <p className="task__title">Название задачи</p>
          <p className="task__category">Категория</p>
          <p className="task__date">Дата</p>
        </div>
        <div className="task">
          <p className="task__title">Название задачи</p>
          <p className="task__category">Категория</p>
          <p className="task__date">Дата</p>
        </div>
        {/* {tasks &&
          tasks.map((item) => (
            <div className="task" key={item.id}>
              <span>{item.title}</span>
            </div>
          ))} */}
      </div>
    </section>
  );
}
