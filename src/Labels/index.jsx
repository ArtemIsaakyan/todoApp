import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './labels.scss';
import AddBtn from '../assets/icons/add.svg';
import RemoveBtn from '../assets/icons/remove.svg';

export default function labels() {
  const [labels, setLabels] = useState('');
  const [label, setNewLabel] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/labels').then((response) => {
      setLabels(response.data);
    });
  }, []);

  function addLabel() {
    if (!label) {
      alert('пусто');
      return;
    }

    let newLabel = {
      id: uuidv4(),
      title: label,
    };

    axios.post('http://localhost:3000/labels', newLabel).then(() => {
      const newListOfLabels = [...labels, newLabel];
      setLabels(newListOfLabels);
    });
  }

  function deleteLabel(id) {
    axios.delete(`http://localhost:3000/labels/${id}`);
    const newArr = [];
    labels.filter((item) => {
      if (item.id !== id) {
        newArr.push(item);
      }
      setLabels(newArr);
    });
  }

  return (
    <section className="labels">
      <h2 className="labels__title title">Labels</h2>
      <div className="labels__create-block">
        <input
          className="labels__input-text input-text"
          type="text"
          name="title"
          vlaue={label}
          onChange={(event) => setNewLabel(event.target.value)}
        />
        <button className="labels__btn-create btn" onClick={() => addLabel()}>
          <img src={AddBtn} alt="create label" />
        </button>
      </div>
      <div className="labels__list">
        {labels &&
          labels.map((item) => (
            <div className="labels__item" key={item.id}>
              <p className="labels__item-title">{item.title}</p>
              <button className="labels__btn-remove btn" onClick={() => deleteLabel(item.id)}>
                <img src={RemoveBtn} alt="remove label" />
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}
