import React from "react"
import PropTypes from "prop-types"
import $ from "jquery"

class ExpectedFlat extends React.Component {
  constructor(props) {
    super(props)

    this.handleFlatTypeChange = this.handleFlatTypeChange.bind(this)
  }

  componentDidMount() {
    $.ajaxSetup({
      headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') }
    })
  }

  handleFlatTypeChange(e) {
    this.props.handleSexChange(e.target.value)
  }

  render () {
    return (
      <div className="form">
        <select
          type="text"
          placeholder="Дети"
          name="Children"
          value={ this.props.user.flat_type }
          onChange={ this.handleFlatTypeChange }
          >
          <option value="room">Комната</option>
          <option value="flat">Квартира</option>
        </select>
      </div>
    )
  }
}

export default ExpectedFlat
