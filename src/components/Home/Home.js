import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { Link } from '@reach/router';
import renderHTML from 'react-render-html';

import Navbar from "../Navbar/Navbar";
import Loader from "../../loader.gif";
import clientConfig from '../../client-config';
import './Home.css';

class Home extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			loading : false,
			posts: [],
			error: '',
            numberOfitemsShown: 5
		};
	}

	createMarkup = ( data ) => ({
		__html: data
	});

	componentDidMount() {
		const wordPressSiteURL = clientConfig.siteUrl;

		this.setState( { loading: true }, () => {
			axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts/` )
				.then( res => {
					if ( 200 === res.status ) {
						if ( res.data.length ) {
							this.setState( { loading: false, posts: res.data } );
						} else {
							this.setState( { loading: false, error: 'No Posts Found' } );
						}
					}

				} )
				.catch( err => this.setState( { loading: false, error: err } ) );
		})
	};

    showMore = () => {
        if (this.state.numberOfitemsShown + 3 <= this.state.posts.length) {
            this.setState(state => ({ numberOfitemsShown: state.numberOfitemsShown + 3 }));
        } else {
            this.setState({ numberOfitemsShown: this.state.posts.length });
        }
    };

	render() {
		const { loading, posts, error } = this.state;

		console.log('asdda');

        const itemsToShow = posts
            .slice(0, this.state.numberOfitemsShown)
            .map(post =>
				<div key={post.id} className="card border-dark mb-3" style={{maxWidth: '50rem'}}>
					<div className="card-header">
						<Link to={`/post/${post.id}`} className="text-secondary font-weight-bold" style={{ textDecoration: 'none' }}>
                            {renderHTML( post.title.rendered )}
						</Link>
					</div>
					<div className="card-body">
						<div className="card-text post-content">{ renderHTML( post.excerpt.rendered ) }</div>
					</div>
					<div className="card-footer">
						<Moment fromNow >{post.date}</Moment>
						<Link to={`/post/${post.id}`} className="read-more-btn" style={{ textDecoration: 'none' }}>
							<span>Read More...</span>
						</Link>
					</div>
				</div>
			);

		return(
			<React.Fragment>
				<Navbar/>
				{ error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
				{ posts.length ? (
					<div className="posts-container">
						{ itemsToShow }
						<div className="show-more-btn" onClick={this.showMore}>
							Show more
						</div>
					</div>
				) : '' }
				{ loading && <img className="loader" src={Loader} alt="Loader"/> }
			</React.Fragment>
		);
	}
}

export default Home;
