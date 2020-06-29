import React, {Component} from 'react';
import './Picture.scss'

class Popup extends Component {
    render() {
        return (
            <div className='popupParent'>
                <div className='popupImage'>
                    <button
                        className='imageClosingButton'
                        onClick={this.props.closePopup}
                    >X</button>
                    <img src={this.props.popImageUrl} style={{width: 500, height:350}} alt=""/>
                </div>
            </div>
        );
    }
}

export default Popup;