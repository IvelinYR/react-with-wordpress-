import React from 'react';
import classnames from 'classnames';

import NavLink from './NavLink';
import './Navbar.css';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        return (
			<nav className={classnames("navbar", { "navbar--hidden": !this.state.visible })}>
				<div>
					<ul className="navbar-nav my-navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink to="/">Home</NavLink>
						</li>
                        <li className="nav-item">
                            <NavLink to="/about">About</NavLink>
                        </li>
					</ul>
				</div>
			</nav>
        );
    }
}
