import React, {Component} from 'react';
import './Picture.scss'
import Popup from "./Popup";
import FormAddImg from "./FormAddImg";

class Pictures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            imageUrlArray: [
                "https://images.wallpaperscraft.ru/image/pirs_prichal_more_sumerki_bereg_118549_1920x1080.jpg",
                "https://images.wallpaperscraft.ru/image/abstraktsiya_forma_ostrie_figurka_101902_1920x1080.jpg",
                "https://images.wallpaperscraft.ru/image/skaly_poberezhe_more_174985_1920x1080.jpg",
                'https://images.wallpaperscraft.ru/image/ferrari_458_ferrari_avtomobil_175687_1920x1080.jpg',
                'https://images.wallpaperscraft.ru/image/vetki_solntse_zakat_175696_1920x1080.jpg',
                'https://images.wallpaperscraft.ru/image/gitara_grif_struny_muzykalnyj_instrument_111531_1920x1080.jpg',
                'https://images.wallpaperscraft.ru/image/fotoapparat_obektiv_semka_135015_1280x720.jpg',
                'https://images.wallpaperscraft.ru/image/ulitsa_zakat_palmy_122106_1280x720.jpg',
                'https://images.wallpaperscraft.ru/image/gitara_muzykalnyj_instrument_tkan_117208_1920x1080.jpg'
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
            <div>
                <FormAddImg imageSubmitter={this.imageSubmitter} handleLinkChange={this.handleLinkChange}/>
                <div className='container'>
                    {images}
                    {this.state.showModal ? (
                        <Popup
                            popImageUrl={this.state.popImageUrl}
                            closePopup={this.handlePopup}
                        />
                    ) : null}
                </div>
            </div>
        )
    }
}

export default Pictures;