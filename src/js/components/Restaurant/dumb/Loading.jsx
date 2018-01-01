import React from 'react'

import { blooprintImage } from '../../Blooprint/constants'

const Loading = (props) => {
    return (
        <div id="loader">
            <p className="center_menu_loading">loading your menu</p>
            <p id="loading_cursor" className="center_menu_loading">....</p>
            <p className="center_menu_loading">brought to  you by <img className="center_menu_loading" id="loading_tm" src={blooprintImage} alt="blooprint" /></p>
        </div>
    )
}
export default Loading
