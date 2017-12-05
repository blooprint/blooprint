import React from 'react'

const RestaurantMedia = (props) => {

    return (
        <div id="restaurant_home_media">
            <a className="restaurant_home_item" href={props.mapURL} target="_blank">
                <img src={require('../../../../assets/img/maps.png')} className="restaurant_home_media_item"/>
            </a>
            <a className="restaurant_home_item" href={props.fbURL} target="_blank">
                <img src={require('../../../../assets/img/facebook.png')} className="restaurant_home_media_item" id="fb_icon"/>
            </a>
        </div>

    )
}
export default RestaurantMedia
