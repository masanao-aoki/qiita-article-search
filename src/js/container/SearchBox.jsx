'use strict';

import React from 'react'
import classNames from 'classnames'
import {SEARCH_TYPE} from '../constants/searchType'
import styles from '../../css/components/searchbox.css'

export default class List extends React.Component {

	componentWillMount() {
		this.setState({
			searchValue: this.props.searchValue
		})
	}

	pushButton(e) {
		const {
			valueChange
		} = this.props

		window.location.href = `/#/search/?page=1&q=${this.state.searchValue}`;
	}

	valueChange(e) {
		this.setState({
			searchValue: e
		})
	}

	render() {
		return (
			<div className={styles.searchform}>
				<input
				className={styles.searchformInput}
				type="text"
				placeholder="記事タイトルから検索"
				value={this.state.searchValue}
				onChange={(e) => this.valueChange(e.target.value)}
				/>
				<p
				className={styles.searchformSubmit}
				onClick = {() => this.pushButton()}
				></p>
			</div>
		)
	}
}
