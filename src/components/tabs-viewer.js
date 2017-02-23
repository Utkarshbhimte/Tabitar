/**
 * Created by utkarsh on 23/02/17.
 */
import React, {
    Component,
    PropTypes,
} from 'react';
import $ from 'jquery'
import Loader from './loader'
import {getRequestUrl} from '../helpers'

class tabsViewer extends Component {
    constructor(){
        super();
        this.state = {
            data: null
        }
    }


    componentWillMount(){
        const json_url = getRequestUrl(this.props.params.id);
        const $this = this;
        $.ajax({
            url: json_url,
            context: document.body,
            success: function(data){
                const top_result = data.results.trackmatches.track[0];
                console.log(top_result);
                $this.setState({data: top_result});

                // $('.image-wrap').html(`<h3> ${top_result.name}</h3>`);
                // $this.background = {
                //     backgroundImage: 'url('+ this.state.data.image[2]['#text']+')'
                // };
            }
        });
    }

    render(){

        return (
            <div className="tabs-viewer-wrap">
                <div className="container">
                    {this.state.data === null &&
                        <Loader />
                    }
                    {this.state.data !== null &&
                    <div className="image-wrap">
                        <h3>{this.state.data.name}</h3>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

tabsViewer.propTypes = {};
tabsViewer.defaultProps = {};

export default tabsViewer;
