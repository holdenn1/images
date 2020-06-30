import React from 'react';
import './Picture.scss'
const FormAddImg = ({handleLinkChange,imageSubmitter}) => {
    return (
        <form
            className='inputImg'
            onSubmit={imageSubmitter}
            action="">
            <input

                type="text"
                placeholder='Insert image'
                onChange={handleLinkChange}
            />
            <button type='Submit' >Submit Link</button>
        </form>
    );
};

export default FormAddImg;