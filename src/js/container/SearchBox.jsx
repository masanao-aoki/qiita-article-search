'use strict';

import React from 'react'
import classNames from 'classnames'
import {SEARCH_TYPE} from '../constants/searchType'
import styles from '../../css/components/searchbox.css'

export default class List extends React.Component {

	componentWillMount() {
		console.log(this.props)
		this.setState({
			searchValue: this.props.searchValue,
			selectValue: this.props.queryType == undefined ? 'title' :  this.props.queryType
		})
	}

	pushButton(e) {
		const {
			valueChange
		} = this.props

		window.location.href = `/#/search/?page=1&q=${this.state.searchValue}&type=${this.state.selectValue}`;
	}

	valueChange(e) {
		this.setState({
			searchValue: e
		})
	}

	selectChange(e) {
		this.setState({
			selectValue: e
		})
	}

	render() {
		const {
			currentPageNum,
			queryType,
			fetchList,
			searchValue
		} = this.props

		return (
			<div className={styles.searchform}>
				<div className={styles.customInput}>
					<div className={styles.customSelect}>
					<select
						defaultValue={this.state.selectValue}
						onChange={(e) => this.selectChange(e.target.value)}
					>
					{SEARCH_TYPE.map(({type, label}) => {
						return <option
							value={type}
							key={type}
						>{label}</option>
					})}
					</select>
					</div>
					<input
					className={styles.searchformInput}
					type="text"
					placeholder='検索したい文言を入れてください'
					value={this.state.searchValue}
					onChange={(e) => this.valueChange(e.target.value)}
					/>
					<p
					className={styles.searchFormSubmit}
					onClick = {() => this.pushButton()}
					></p>
				</div>
			</div>
		)
	}
}
