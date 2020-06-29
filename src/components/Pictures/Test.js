import React, {Component} from 'react';
import './Picture.scss'
import Popup from "./Popup";

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            imageUrlArray: [
                "https://images.wallpaperscraft.ru/image/pirs_prichal_more_sumerki_bereg_118549_1920x1080.jpg",
                "https://images.wallpaperscraft.ru/image/abstraktsiya_forma_ostrie_figurka_101902_1920x1080.jpg",
                "https://images.wallpaperscraft.ru/image/skaly_poberezhe_more_174985_1920x1080.jpg"

            ],
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
            popImageUrl: url
        })
    }

    render() {

        let imageUrlArray = this.state.imageUrlArray

        const images = imageUrlArray.map((url, index) => {
            return (
                <img
                    className='singleImage'
                    src={url}
                    key={index}
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