import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import MenuButtons from './MenuButtons'

class MenuHeader extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
            <MediaQuery maxWidth={767}>
                <div>
                    <Link to={'/'+this.props.match.params.restaurant}>
                        <h1 className="menu_header" id="mobile_menu_header">{this.props.restaurant.restaurantInfo.map((tableline) => {
                            if( tableline.item == 'name' ) {
                                return (
                                    <div className="link" onClick={() => {
                                            this.props.action_viewHome()
                                        }}>
                                        {tableline.value}
                                    </div>
                                )
                            }
                        })}</h1>
                    </Link>

                </div>
            </MediaQuery>

            <MediaQuery minWidth={768} maxWidth={991}>
                <div>
                    <Link to={'/'+this.props.match.params.restaurant}>
                        <h1 className="menu_header" id="mobile_menu_header">{this.props.restaurant.restaurantInfo.map((tableline) => {
                            if( tableline.item == 'name' ) {
                                return (
                                    <div className="link" onClick={() => {
                                            this.props.action_viewHome()
                                        }}>
                                        {tableline.value}
                                    </div>
                                )
                            }
                        })}</h1>
                    </Link>

                    <MenuButtons {...this.props} />

                </div>
            </MediaQuery>

            <MediaQuery minWidth={992}>
                <div>
                    <Link to={'/'+this.props.match.params.restaurant}>
                        <h1 className="menu_header">{this.props.restaurant.restaurantInfo.map((tableline) => {
                            if( tableline.item == 'name' ) {
                                return (
                                    <div className="link" onClick={() => {
                                            this.props.action_viewHome()
                                        }}>
                                        {tableline.value}
                                    </div>
                                )
                            }
                        })}</h1>
                    </Link>

                    <MenuButtons {...this.props} />

                </div>
            </MediaQuery>
            </div>
        )
    }
}

export default MenuHeader
