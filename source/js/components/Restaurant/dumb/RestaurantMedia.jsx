import React from 'react'

const RestaurantMedia = (props) => {

    return (
        <div id="restaurant_home_media">
            {
                props.restaurant.restaurantInfo.map((tableline) => {
                    if( tableline.item === 'map' ) {
                        return (
                            <a className="restaurant_home_item" href={tableline.value} target="_blank">
                                <img src={require('../../../../assets/img/maps.png')} className="restaurant_home_media_item"/>
                            </a>
                        )
                    }
                    else if( tableline.item === 'facebook' ) {
                        return (
                            <a className="restaurant_home_item" href={tableline.value} target="_blank">
                                <img src={require('../../../../assets/img/facebook.png')} className="restaurant_home_media_item" className="fb_icon" />
                            </a>
                        )
                    }
                    else if( tableline.item === 'twitter' ) {
                        return (
                            <a className="restaurant_home_item" href={tableline.value} target="_blank">
                                <img src={require('../../../../assets/img/twitter.png')} className="restaurant_home_media_item" className="fb_icon" />
                            </a>
                        )
                    }
                    else if( tableline.item === 'instagram' ) {
                        return (
                            <a className="restaurant_home_item" href={tableline.value} target="_blank">
                                <img src={require('../../../../assets/img/instagram.png')} className="restaurant_home_media_item" className="fb_icon" />
                            </a>
                        )
                    }
                })
            }
        </div>
    )
}
export default RestaurantMedia
