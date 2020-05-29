import React from 'react'
import 'react-tabs/style/react-tabs.css';
import $ from 'jquery'

import UserForm from '../containers/UserForm'
import ExpectedNeihgborForm from '../containers/ExpectedNeihgborForm'
import ExpectedFlatForm from '../containers/ExpectedFlatForm'

export default class Registration extends React.Component {
	constructor(props) {
		super(props)

		this.stepHandler = this.stepHandler.bind(this)

		this.state = {
			currentStep: 1,
			user: this.props.user
		}
	}

	stepHandler = (step) => {
		this.setState({
			currentStep: step
		})
	}


	render() {
		const {
			user,
			currentStep
		} = this.state

		let h3
		let p2
		let active

		if (currentStep == 1) {
			h3 = 'Расскажи о себе';
			p2 = 'Это понадобится, чтобы мы смогли подобрать наиболее подходящего соседа. К этим пунктам можно будет вернуться в любой момент.'
		} else if (currentStep == 2) {
			h3 = 'Каким должен быть сосед?';
			p2 = 'Это понадобится, чтобы мы смогли подобрать наиболее подходящего соседа. К этим пунктам можно будет вернуться в любой момент.'
		} else if (currentStep == 3) {
			h3 = 'Что ты хочешь снять?';
			p2 = 'Это понадобится, чтобы мы смогли подобрать наиболее подходящего соседа. К этим пунктам можно будет вернуться в любой момент.'
		}

		return (
			<div className='registration'>
        <div className='step_bar'>
          <div className={(currentStep == 1) ? 'step active' : 'step'}>1</div>
          <div className={(currentStep == 2) ? 'step active' : 'step'}>2</div>
          <div className={(currentStep == 3) ? 'step active' : 'step'}>3</div>
        </div>

        <h3>{ h3 }</h3>
        <div className='p2'> { p2 } </div>
        { (currentStep == 1)
          ? <UserForm user={user} stepHandler={this.stepHandler} />
          : <div></div>
        }

        { (currentStep == 2)
          ? <ExpectedNeihgborForm user={user} stepHandler={this.stepHandler} />
          :  <div></div>
        }

        { (currentStep == 3)
          ? <ExpectedFlatForm user={user} stepHandler={this.stepHandler} />
          :  <div></div>
        }
      </div>
		)
	}
}
