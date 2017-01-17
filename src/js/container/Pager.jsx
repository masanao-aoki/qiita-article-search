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
			queryType,
			content,
			fetchList
		} = this.props

		const query = {
			q: searchValue,
			page: currentPageNum,
			type: queryType
		}

		return (
			<p
			className={styles.moreBtn}
			onClick={()=> fetchList({querys:query},content)}
			>MORE</p>
		)
	}
}
