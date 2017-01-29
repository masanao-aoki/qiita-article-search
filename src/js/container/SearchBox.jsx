'use strict';

import React from 'react'
import classNames from 'classnames'
import {Link} from 'react-router'
import {SEARCH_TYPE} from '../constants/searchType'
import styles from '../../css/components/searchbox.css'

export default class List extends React.Component {

	componentWillMount() {
		this.setState({
			searchValue: this.props.searchValue,
			selectValue: this.props.queryType == undefined ? 'title' :  this.props.queryType
		})
	}

	pushButton() {
		window.location.href = `/#/search/?page=1&q=${this.state.searchValue}&type=${this.state.selectValue}`;
	}

	valueChange(searchValue) {
		this.setState({
			searchValue
		})
	}

	selectChange(selectValue) {
		this.setState({
			selectValue
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
					<Link className={styles.searchFormSubmit} to={`/search/?page=1&q=${this.state.searchValue}&type=${this.state.selectValue}`}>aaaaa</Link>
				</div>
			</div>
		)
	}
}
