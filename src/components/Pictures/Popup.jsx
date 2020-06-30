import React, {Component} from 'react';
import {mdiClose} from '@mdi/js';
import Icon from '@mdi/react'
import './Picture.scss'

class Popup extends Component {
    render() {
        return (
            <div className='popupParent'>
                <div className='popupImage'>
                    <Icon path={mdiClose}
                          className='imageClosingButton'
                          onClick={this.props.closePopup}/>
                    <div className='wrapper'>
                        <img
                            className='popImg'
                            src={this.props.popImageUrl} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;