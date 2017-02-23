/**
 * Created by utkarsh on 23/02/17.
 */

import React, {
    Component,
    PropTypes,
} from 'react';
import {slugify} from '../helpers'

class Card extends Component {

    constructor(){
        super();
        this.state = {
            clicked: false,
            loaded: false
        }
        this.cardClickHandler = this.cardClickHandler.bind(this)
    }

    cardClickHandler = (e) => {

        const inititalPosition = e.target.getBoundingClientRect();
        console.log(inititalPosition.left, inititalPosition.top);
        console.log('clicked', this);

        let transition = document.createElement('div');

        transition.id = 'card-transition';
        transition.style['position'] = 'absolute';
        transition.style['left'] = inititalPosition.left+'px';
        transition.style['top'] = inititalPosition.top+'px';
        transition.style['height'] = 120+'px';
        transition.style['width'] = 120+'px';

        console.log(e.target.innerHTML)

        let redirectionUrl = slugify(e.target.innerHTML);
            // + this.props.bottomNavState;

        console.log('redirecting to',redirectionUrl);
        document.body.appendChild(transition);

        setTimeout(()=>{
            transition.className += 'active';
        }, 1);

        setTimeout(()=>{
            this.context.router.transitionTo(`/${this.props.bottomNavState}/${redirectionUrl}`);
        }, 300)
    };

    render() {
        return (
            <div className={`card ${this.state.clicked ? 'active': ''}`} onClick={(e) => this.cardClickHandler(e)} >
                <span>{this.props.title}</span>
            </div>
        );
    }
}

Card.contextTypes = {
    router: React.PropTypes.object
}

Card.propTypes = {};
Card.defaultProps = {};

export default Card;
