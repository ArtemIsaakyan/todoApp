import React from 'react'
import './Lables.css'
import AddBtn from '../assets/icons/add.svg'
import RemoveBtn from '../assets/icons/remove.svg'

export default function Lables() {
    return(
        <section className="lables">
            <h2 className="lables__title title">Lables</h2>
            <div className="lables__create-block">
                <input className="lables__input-text input-text" type="text" name="title" id="" />
                <button className="lables__btn-create btn"><img src={AddBtn} alt="create label" /></button>
            </div>
            <div className="lables__list">
                <div className="lables__item">
                    <p class="lables__item-title">Title task</p>
                    <button className="lables__btn-remove btn"><img src={RemoveBtn} alt="remove label" /></button>
                </div>
                <div className="lables__item">
                    <p class="lables__item-title">Title task</p>
                    <button className="lables__btn-remove btn"><img src={RemoveBtn} alt="remove label" /></button>
                </div>
                <div className="lables__item">
                    <p class="lables__item-title">Title task</p>
                    <button className="lables__btn-remove btn"><img src={RemoveBtn} alt="remove label" /></button>
                </div>

            </div>
        </section>
    )
}