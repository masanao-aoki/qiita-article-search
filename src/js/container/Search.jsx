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

	componentDidMount() {
		window.addEventListener('popstate', () => this.handlePopState());
	}

	componentWillUnmount() {
		window.removeEventListener('popstate', () => this.handlePopState());
	}

	handlePopState() {
		const locationQuery = qs.parse(location.hash.split('?')[1]);
		this.queryChange(locationQuery);
	}

	queryChange(querys) {
		this.props.valueChange(querys.q);
		this.props.pageNumChange(querys.page);
		this.props.fetchList({querys},this.props.content);
	}

    render() {
        const {
			location: {
				query:{
					q:searchValue,
					page:currentPageNum
				}},
			content
		} = this.props

        return (
			<div>
			<SearchBox
				{...{
					searchValue,
					currentPageNum
				}}
			/>
			<List
				{...{
					content
				}}
			/>
			<Pager
				{...{
					searchValue,
					currentPageNum
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
		}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
