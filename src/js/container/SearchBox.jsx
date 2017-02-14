'use strict';

import React from 'react'
import classNames from 'classnames'
import {Link} from 'react-router'
import Form from 'react-router-form'
import {SEARCH_TYPE} from '../constants/searchType'
import styles from '../../css/components/searchbox.css'

export default class List extends React.Component {

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
			searchValue,
			changeType,
			changeValue
		} = this.props

		return (
			<div className={styles.searchform}>

				 <form action="/search" method="get" className={styles.customInput}>
					<div className={styles.customSelect}>
						<select
							name="qaaa"
							defaultValue={queryType}
							onChange={(e) => changeType(e.target.value)}
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
						name="q"
						className={styles.searchformInput}
						type="text"
						placeholder='検索したい文言を入れてください'
						value={searchValue}
						onChange={(e) => changeValue(e.target.value)}
					/>
					<button className={styles.searchFormSubmit} type="submit">Add Post</button>
				</form>
			</div>
		)
	}
}
