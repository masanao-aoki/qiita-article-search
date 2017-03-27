'use strict';

import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'
import styles from '../../css/components/list.css'

export default class List extends React.Component {

	render() {
		const {
			requestState
		} = this.props
		return (
			<div className={styles.article}>
				{
					requestState &&
					<p className={styles.error}>検索結果は見つかりませんでした</p>
				}
				{this.props.content.map(({title, tags, id, created_at, user}) => {
					const articleUrl = '/detail/' + id;
					const createdDate = moment(created_at).format("YYYY/MM/DD");
					const userData = user.name ? user.name : user.id;
					return <article className={styles.articleItem} key={id}>
						<Link to={`/article/${id}`}>
							<div className={styles.articleItemHead}>
								<h2 className={styles.articleItemTitle}>
									{title}
								</h2>
								<ul className={styles.articleItemTagGroup}>
									{tags.map(({name}) => {
										return <li key={name}>{name}</li>
									})}
								</ul>
							</div>
							<time className={styles.articleItemTime} dateTime={created_at}>{createdDate}</time>
							<p className={styles.articleItemUser}>{userData}</p>
						</Link>
					</article>
				})}
			</div>
		)
	}
}
