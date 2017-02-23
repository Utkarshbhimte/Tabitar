/**
 * Created by utkarsh on 23/02/17.
 */
import React, {
    Component,
    PropTypes,
} from 'react';

class BottomNav extends Component{
    render()
    {
        return (
            <div className="bottom-nav-wrap">
                <tab onClick={ (e) => this.props.onBottomNavClick(e)} className={this.props.active === 'tabs' ? 'active' : '' } >Tabs</tab>
                <tab onClick={ (e) => this.props.onBottomNavClick(e)} className={this.props.active === 'chords' ? 'active' : ''} >Chords</tab>
                <div className={`background ${this.props.active == 'chords' ? 'right' : ''}`}></div>
            </div>
        );
    }
}

BottomNav.propTypes = {};
BottomNav.defaultProps = {};

export default BottomNav;
