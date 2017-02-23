/**
 * Created by utkarsh on 23/02/17.
 */

import React, {
    Component,
    PropTypes,
} from 'react';
import Header from './header'
import Showcase from './showcase'
import TopNav from './top-nav'
import BottomNav from './bottom-nav'

class App extends Component {
    constructor(){
        super();

        this.state = {
            bottomNavState: 'tabs',
            topNavState: 'hindi',
        }

        this.onBottomNavClick = this.onBottomNavClick.bind(this);
    }

    onBottomNavClick = (e) => {
        const bottomNavState = e.target.innerHTML.toLowerCase();
        this.setState({bottomNavState});
    }

    render() {
        return (
            <div className="contain-all">
               <Header />
                <TopNav active={this.state.topNavState} />
                <div className="content">
                    <Showcase bottomNavState={this.state.bottomNavState} category="latest" />
                    <Showcase bottomNavState={this.state.bottomNavState} category="top" />
                </div>
                <BottomNav active={this.state.bottomNavState}
                           onBottomNavClick={this.onBottomNavClick}/>
            </div>
        );
    }
}

App.propTypes = {};
App.defaultProps = {};

export default App;

