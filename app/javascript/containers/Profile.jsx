import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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

    // this.handleInfoSubmit = this.handleInfoSubmit.bind(this)

    this.state = {
      user: this.props.user
    }
	}

  componentDidMount() {
    $.ajaxSetup({
      headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') }
    })
  }

  // handleInfoSubmit(e) {
  //   $.ajax({
  //     url: "../users/" + this.props.user.id,
  //     dataType: 'JSON',
  //     type: 'PATCH',
  //     method: 'PATCH',
  //     data: {
  //       user: {
  //         email: this.state.user.email,
  //         name: this.state.user.name,
  //         surname: this.state.user.surname,
  //         birthdate: this.state.user.birthdate
  //       }
  //     },
  //     success: response => {
  //       console.log('User updated: ', response);
  //     }
  //     })
  //     .done(function (data) {
  //       console.log("success", data, data.url);
  //   })
  // }

  render(){
    const {user} = this.state
    const {orders} = this.state.user;

    return(
      <div>
        <Tabs selectedTabClassName='active'>
          <TabList className='nav_tab'>
            <Tab className='tab'>О себе</Tab>
            <Tab className='tab'>О соседях</Tab>
            <Tab className='tab'>О квартире</Tab>
          </TabList>

          <TabPanel>
            <UserForm user={user}/>
          </TabPanel>

          <TabPanel>
            <ExpectedNeihgborForm user={user}/>
          </TabPanel>

          <TabPanel>
            <ExpectedFlatForm user={user}/>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}
