import React from 'react'
import PropTypes from "prop-types"
import $ from 'jquery'

import ExpectedFlat from '../components/ExpectedFlat'


export default class ExpectedFlatForm extends React.Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		console.log('меняем экран');
		window.location.replace('/flats')
	}

	render() {
		return (
			<div>
        <ExpectedFlat/>
				<div className='horizontal buttons'>
	          <button
							onClick={this.handleSubmit}
	            className="l_button primary_button"> Сохранить
	          </button>
						<div><div className='spacing-m-w'></div></div>
	          <button
	            onClick={this.handleSubmit}
	            className="l_button flat_button"> Пропустить
	          </button>
	        </div>
      </div>
		)
	}
}