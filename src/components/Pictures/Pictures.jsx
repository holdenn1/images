import React, {Component} from 'react';
import './Picture.scss'
import Popup from "./Popup";


class Pictures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            imageUrlArray: [],
            showModal: false,
            popImageUrl: ''
        }

    }

    imageSubmitter = (e) => {
        e.preventDefault();
        let imageUrlsArray = this.state.imageUrlArray
        imageUrlsArray.push(this.state.imageUrl)
        this.setState({
            imageUrlsArray: imageUrlsArray
        })
    }

    handleLinkChange = (e) => {
        e.preventDefault()
        this.setState({
            imageUrl: e.target.value
        })
    }

    handlePopup = (url) => {
        this.setState({
            showModal: !this.state.showModal,
            popImageUrl: url.img
        })
    }

    render() {

        let items = this.props.items

        const images = items.map((url, index) => {
            return (
                <img
                    className='singleImage'
                    src={url.img}
                    key={url.id}
                    style={{height: 185, width: 350 }}
                    onClick={() => this.handlePopup(url)}
                    alt=""/>
            )
        })
        return (
            <div className='Images'>
                <form
                    onSubmit={this.imageSubmitter}
                    action="">
                    <input
                        type="text"
                        placeholder='insert image'
                        onChange={this.handleLinkChange}
                    />
                    <button type='Submit' className='submitButton'>Submit image</button>
                </form>
                {images}
                {this.state.showModal ? (
                    <Popup
                        popImageUrl={this.state.popImageUrl}
                        closePopup={this.handlePopup}
                    />
                ) : null}
            </div>
        )
    }
}


export default Pictures;