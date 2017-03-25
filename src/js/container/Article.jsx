'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import classNames from 'classnames'
import moment from 'moment'
//component
import LoadLayer from './LoadLayer'
//style
import styles from '../../css/components/article.css'
//action
import { fetchArticle, returnArticleRequest, loadingStateChange } from '../action/action'


export class Article extends React.Component {

    componentDidMount(){
		this.props.contentRequest(this.props.params.id);
    }

	componentWillUnmount() {
		this.props.init();
		this.props.loadingInit();
	}

	render() {
		const {
			detailContent,
			loadingState,
		} = this.props

		console.log(detailContent);

		return (
			<div>
				{ loadingState &&
					<LoadLayer/>
				}
			<div className={styles.artivleHead}>
				<h2 className={styles.articleTitle}>
					{detailContent.title}
				</h2>
				{detailContent.length != 0 &&
					<ul className={styles.articleTagGroup}>
						{detailContent.tags.map(({name}) => {
							return <li key={name}>{name}</li>
						})}
					</ul>
				}
				<p className={styles.articleTime}>{moment(detailContent.created_at).format("YYYY/MM/DD")}</p>

				{detailContent.length != 0 &&
					<p className={styles.articleUser}>{detailContent.user.name ? detailContent.user.name : detailContent.user.id}</p>
				}
				<p
					onClick={browserHistory.goBack}
				>aaaaaa</p>
			</div>
			<div className={styles.markdownBody} dangerouslySetInnerHTML={{__html: detailContent.rendered_body}}>
			</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
    return state.article
}

function mapDispatchToProps(dispatch) {
    return {
        init: () => { dispatch(returnArticleRequest('')) },
		loadingInit: () => { dispatch(loadingStateChange(true)) },
        contentRequest: (articleId) => { dispatch(fetchArticle(articleId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
