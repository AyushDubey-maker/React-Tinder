import React from 'react'
import './SwipeButtons.css'
//All icon Buttons Required..
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'
function SwipeButtons() {
    function reloadPage(e){
        e.preventDefault()
    window.location.reload()
    }
    return (
        <div className="swipeButtons">
            <IconButton onClick={reloadPage} className="swipe_replay">
           <ReplayIcon fontSize="large"/>
           </IconButton>
           <IconButton className="swipe_close"> 
           <CloseIcon fontSize="large"/>
           </IconButton>
           <IconButton className="swipe_star">
           <StarRateIcon fontSize="large"/>
           </IconButton>
           <IconButton className="swipe_favorite">
           <FavoriteIcon fontSize="large"/>
           </IconButton>
           <IconButton className="swipe_flashOn">
           <FlashOnIcon fontSize="large"/>
           </IconButton>
        </div>
    )
}

export default SwipeButtons
