import React from 'react';
import './directory.styles.scss';
import HOMEPAGE_DATA from './data';

import MenuItem from '../menu-item/menu-item.component';


class Directory extends React.Component {

    constructor() {
        super()

        this.state = {
            sections: HOMEPAGE_DATA
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherProps }) =>
                        <MenuItem key={id} {...otherProps} />)
                }
            </div>
        )
    }

}

export default Directory