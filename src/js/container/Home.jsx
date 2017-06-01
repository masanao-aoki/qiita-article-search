'use strict';

import React from 'react'
import { ReactDOM } from 'react-dom'
import { connect } from 'react-redux'
import SearchBox from './SearchBox'
import { changeValue, changeType } from '../action/action'

import {SEARCH_TYPE} from '../constants/searchType'

export class Home extends React.Component {

	render() {
		const {
			changeValue,
			changeType,
			pageParams: {
				searchValue,
				searchType,
				currentPageNum
			},
		} = this.props

		return (
			<div>
				<SearchBox
					{...{
						searchValue,
						currentPageNum,
						changeValue,
						changeType
					}}
				/>
			</div>
		)
	}
}

function mapStateToProps(state) {
    return state.home
}

function mapDispatchToProps(dispatch) {
	return {
		changeValue: (searchVlue) => { dispatch(changeValue(searchVlue)) },
		changeType: (searchType) => { dispatch(changeType(searchType)) },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
