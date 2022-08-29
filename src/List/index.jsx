import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import AddBtn from '../assets/icons/add.svg';

export default function list() {
  const [tasks, reciveTasks] = useState('');
  const [task, newTask] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/list').then((response) => {
      reciveTasks(response.data);
    });
  }, []);

  return (
    <section className="list">
      <h2 className="list__title title">List</h2>
      <div className="labels__create-block">
        <input
          className="labels__input-text input-text"
          type="text"
          name="title"
          value={task}
          onChange={(event) => newTask(event.target.value)}
        />
        <button className="labels__btn-create btn" onClick={() => createTask()}>
          <img src={AddBtn} alt="create label" />
        </button>
      </div>
    </section>
  );
}
