import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return <input onChange={this.handleInputChange} />
	}

	handleInputChange() {
		console.log('here');
	}
}

export default SearchBar;