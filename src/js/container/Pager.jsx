'use strict';

import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import styles from '../../css/components/pager.css'

export default class Pager extends React.Component {
	render() {
		return (
			<p className={styles.moreBtn}>MORE</p>
		)
	}
}
