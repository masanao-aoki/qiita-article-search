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
import qs from 'qs'
import { fetchList, changeValue, changeType, pageNumChange,returnRequest } from '../action/action'

export class Home extends React.Component {
	componentWillMount() {
		const {
			location: {query},
			content
		} = this.props
		this.queryChange(query);
	}

	componentWillUnmount() {
		this.props.itemInit();
	}

	queryChange(queries) {
		this.props.changeValue(queries.q);
		this.props.changeType(queries.type);
		this.props.fetchList({queries},this.props.content);
	}

	render() {
		const {
			location: {query},
			pageParams: { searchValue },
			pageParams: { searchType },
			content,
			changeType,
			changeValue,
			pageParams: {
				currentPageNum
			},
			fetchList
		} = this.props

		return (
			<div>
			<SearchBox
				{...{
					searchValue,
					currentPageNum,
					searchType,
					changeType,
					changeValue
				}}
			/>
			<List
				{...{
					content
				}}
			/>
			<Pager
				{...{
					currentPageNum,
					searchValue,
					searchType,
					content,
					fetchList
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
		pageNumChange: (pageNum) => { dispatch(pageNumChange(pageNum)) },
		itemInit: () => { dispatch(returnRequest([])) },
		fetchList: ({queries}, content) => {
			dispatch(fetchList({queries},content))
			dispatch(pageNumChange(queries.page))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
