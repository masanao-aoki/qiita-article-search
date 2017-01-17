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
import { fetchList, valueChange, pageNumChange, scrollTop } from '../action/action'

export class Home extends React.Component {
	componentWillMount() {
		const {
			location: {query},
			content
		} = this.props
		this.queryChange(query);
	}

	queryChange(querys) {
		this.props.valueChange(querys.q);
		this.props.fetchList({querys},this.props.content);
	}

    render() {
        const {
			location: {query},
			location: {
				query:{
					q:searchValue,
					type:queryType
				}},
			content,
			currentPageNum,
			fetchList
		} = this.props

		console.log(this.props);

        return (
			<div>
			<SearchBox
				{...{
					searchValue,
					currentPageNum,
					queryType,
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
					queryType,
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
        valueChange: (searchVlue) => { dispatch(valueChange(searchVlue)) },
        pageNumChange: (pageNum) => { dispatch(pageNumChange(pageNum)) },
		fetchList: ({querys}, content) => {
			dispatch(fetchList({querys},content))
			dispatch(pageNumChange(querys.page))
		}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
