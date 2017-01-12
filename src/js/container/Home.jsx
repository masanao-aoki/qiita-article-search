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
import { ajaxRequest, valueChange, typeChange, pageNumChange, scrollTop } from '../action/action'

import {SEARCH_TYPE} from '../constants/searchType'

export class Home extends React.Component {
	componentDidMount() {
	}

	render() {
		const {
			searchValue,
			currentPageNum,
		} = this.props
		return (
			<div>
				<SearchBox
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
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
