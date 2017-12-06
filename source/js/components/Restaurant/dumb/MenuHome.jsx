import React from 'react'
import ViewSoretedMenuList from './ViewSoretedMenuList'
// import ViewLunchDinner from './ViewLunchDinner'
// import ViewDessert from './ViewDessert'
import MenuHeader from './MenuHeader'
import MenuSection from './MenuSection'
import Footer from '../../Blooprint/dumb/Footer'

const MenuHome = (props) => {

    console.log('about to split up sections\n',props)

    return (
        <div>
            <MenuHeader
                className="menu_block"
                actions={props.actions}
                restaurant={props.restaurant}
                restaurantInfo={props.restaurantInfo} />

            <ViewSoretedMenuList restaurant={props.restaurant} />
            <Footer />
        </div>
    )
}

export default MenuHome
