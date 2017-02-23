/**
 * Created by utkarsh on 23/02/17.
 */

import React, {
    Component,
    PropTypes,
} from 'react';

class Loader extends Component {
    render() {
        return (
            <div class="sampleContainer">
                <div class="loader">
                    <span class="dot dot_1"></span>
                    <span class="dot dot_2"></span>
                    <span class="dot dot_3"></span>
                    <span class="dot dot_4"></span>
                </div>
            </div>
        );
    }
}

Loader.propTypes = {};
Loader.defaultProps = {};

export default Loader;
