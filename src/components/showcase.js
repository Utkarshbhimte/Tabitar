/**
 * Created by utkarsh on 23/02/17.
 */

import React, {
    Component,
    PropTypes,
} from 'react';
import Card from './card'

class Showcase extends Component {

    render() {
        return (
            <div className="showcase-wrap">
                <h3>{this.props.type}</h3>
                <div className="card-wrap">
                    <Card bottomNavState={this.props.bottomNavState} title="We are Young" />
                    <Card bottomNavState={this.props.bottomNavState} title="We are Young" />
                    <Card bottomNavState={this.props.bottomNavState} title="We are Young" />
                    <Card bottomNavState={this.props.bottomNavState} title="We are Young" />
                    <Card bottomNavState={this.props.bottomNavState} title="We are Young" />
                    <Card bottomNavState={this.props.bottomNavState} title="We are Young" />
                    <Card bottomNavState={this.props.bottomNavState} title="We are Young" />
                    <Card bottomNavState={this.props.bottomNavState} title="We are Young" />
                    <Card bottomNavState={this.props.bottomNavState} title="We are Young" />
                </div>
            </div>
        );
    }
}

Showcase.propTypes = {};
Showcase.defaultProps = {};

export default Showcase;

