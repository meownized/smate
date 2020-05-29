import React, {
	useRef
} from 'react'
import {
	Tab,
	Tabs,
	TabList,
	TabPanel
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import $ from 'jquery'

import UserForm from '../containers/UserForm'
import ExpectedNeihgborForm from '../containers/ExpectedNeihgborForm'
import ExpectedFlatForm from '../containers/ExpectedFlatForm'

// import UserSettings from '../components/user_settings'
// import OrderList from '../components/order'

export default class Profile extends React.Component {
	constructor(props) {
		super(props)

		this.triggerFormSubmit = this.triggerFormSubmit.bind(this)

		this.state = {
			user: this.props.user
		}
	}

	componentDidMount() {
		$.ajaxSetup({
			headers: {
				'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
			}
		})
	}

	triggerFormSubmit() {
		this.refs.formRef.handleSubmit();
	}

	render() {
		const {
			user
		} = this.state
		const {
			orders
		} = this.state.user;

		return (
			<div>
        <Tabs selectedTabClassName='active'>
          <TabList className='nav_tab'>
            <Tab className='tab'>О себе</Tab>
            <Tab className='tab'>О соседях</Tab>
            <Tab className='tab'>О квартире</Tab>

            <div className='horizontal'>
              <button
                className='s_button secondary_button'
                onClick={this.triggerFormSubmit}
                >
                Отменить
              </button>
              <div><div className='spacing-m-w'></div></div>
              <button
                className='s_button primary_button'
                onClick={this.triggerFormSubmit}
                >
                Сохранить
              </button>
            </div>
          </TabList>

          <TabPanel>
            <UserForm ref='formRef' user={user}/>
          </TabPanel>

          <TabPanel>
            <ExpectedNeihgborForm ref='formRef' user={user}/>
          </TabPanel>

          <TabPanel>
            <ExpectedFlatForm ref='formRef' user={user}/>
          </TabPanel>
        </Tabs>
      </div>
		)
	}
}