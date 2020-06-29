import React, {Component} from 'react';
import './Picture.scss'
import Popup from "./Popup";


class Test extends Component {
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

        let imageUrlArray = this.state.imageUrlArray
        let items = this.props.items
        console.log(items)

        const images = items.map((url, index) => {
            return (
                <img
                    className='singleImage'
                    src={url.img}
                    key={url.id}
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


export default Test;