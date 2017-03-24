'use strict';

import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import styles from '../../css/components/pager.css'

export default class Pager extends React.Component {
	render() {
		const {
			currentPageNum,
			searchValue,
			searchType,
			content,
			fetchList,
			requestState,
			nextPageState
		} = this.props

		const queries = {
			q: searchValue,
			page: currentPageNum,
			type: searchType
		}

		return (
			<p
			className={styles.moreBtn}
			onClick={()=> fetchList({queries},content)}
			style={{ display: requestState || !nextPageState ? 'none' : 'block' }}
			>MORE</p>
		)
	}
}
