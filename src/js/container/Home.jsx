'use strict';

import React from 'react'
import { ReactDOM } from 'react-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import classNames from 'classnames'
import {Link} from 'react-router'
import _ from 'lodash'
import SearchBox from './SearchBox'
import List from './List'
import Pager from './Pager'
import { changeValue, changeType, pageNumChange } from '../action/action'

import {SEARCH_TYPE} from '../constants/searchType'

export class Home extends React.Component {
	componentDidMount() {
	}

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
