import React from 'react'

import classes from './SwitchLink.module.css'

const SwitchLink = ({ preText, switchText, updateMode }) => {
    return (
        <div>
            <p className={ classes.Switch }> { preText } <span className={ classes.Link } onClick={ updateMode } > { switchText } </span> here.</p>
        </div>
    )
}

export default SwitchLink
