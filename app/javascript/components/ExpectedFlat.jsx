import React from "react"
import PropTypes from "prop-types"
import $ from "jquery"

class ExpectedFlat extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		$.ajaxSetup({
			headers: {
				'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
			}
		})
	}

	render() {
		return (
			<div className='registration_container'>
        <h4> Тип жилья </h4>
				<div className='label_default_input'>
          <select
            type="text"
            name="email"
            className="default_input"
          >
            <option>Комната</option>
          </select>

          <label for='email'>Тип жилья</label>
        </div>

        <h4> Дом </h4>

				<div className='label_default_input'>
          <select
            type="text"
            name="email"
            className="default_input"
          >
            <option>Тип дома неважен</option>
          </select>

          <label for='name'>Тип дома</label>
        </div>

				<div className='label_default_input'>
          <select
            type="text"
            name="email"
            className="default_input"
          >
            <option>Кол-во этажей неважно</option>
          </select>

          <label for='name'>Этажность</label>
        </div>

        <div className='label_default_input'>
          <select
            type="text"
            name="email"
            className="default_input"
          >
            <option></option>
          </select>

          <label for='name'>Метро</label>
        </div>

				<div className='horizontal'>
					<div className='label_default_input sex_input'>
						<select
							type="text"
							name="time"
							className="default_input">
              <option>Время в пути</option>
						</select>
					</div>

					<div><div className='spacing-m-w'></div></div>
					<div className='label_default_input age_input'>
            <div className='count_input'>
              <div className='minus'></div>
              <input
                type="number"
                placeholder="0 мин"
                name="age"
                className="default_input"
                />
              <div className='plus'></div>
            </div>
					</div>
				</div>

        <h4> Квартира </h4>

				<div className='label_default_input'>
					<select
						type="text"
						className="default_input">
						<option value="false">Этаж любой</option>
					</select>

					<label for='children'>Этаж</label>
				</div>

        <div className='label_default_input'>
					<select
						type="text"
						className="default_input">
						<option value="false">Ремонт любой</option>
					</select>

					<label for='children'>Ремонт</label>
				</div>


        <div className='label_default_input'>
					<select
						type="text"
						className="default_input">
						<option value="false">Наличие мебели неважно</option>
					</select>

					<label for='children'>Мебель</label>
				</div>

        <div className='label_default_input'>
          <select
            type="text"
            className="default_input">
            <option value="false">Любое количество людей в квартире</option>
          </select>

          <label for='children'>Количество соседей</label>
        </div>

				<h4> Комната </h4>

				<div className='label_default_input'>
					<input
						type="text"
						className="default_input"
						/>

					<label for='lgbtq'>Не проходная</label>
				</div>

        <div className='label_default_input'>
          <select
            type="text"
            className="default_input">
            <option value="false">Ремонт любой</option>
          </select>

          <label for='children'>Ремонт</label>
        </div>

        <div className='label_default_input'>
          <select
            type="text"
            className="default_input">
            <option value="false">Наличие мебели неважно</option>
          </select>

          <label for='children'>Мебель</label>
        </div>

        <div className='label_default_input'>
          <select
            type="text"
            className="default_input">
            <option value="false">Любое количество людей в комнате</option>
          </select>

          <label for='children'>Соседи в комнате</label>
        </div>
      </div>
		)
	}
}

export default ExpectedFlat