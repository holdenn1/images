import React from 'react';
import './Picture.scss'

const Pictures = ({items}) => {
    console.log(items)
    return (
        <div>
            {
                items.map(item => (
                    <div className="image__wrapper">
                        <img
                            className="minimized"
                            key={item.id}
                            src={item.img} alt=""/>
                    </div>

                ))
            }
        </div>
    );
};


export default Pictures;