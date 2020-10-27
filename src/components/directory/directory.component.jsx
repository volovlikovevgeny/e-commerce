import React from 'react';
import { DirectoryMenuContainer } from './directory.styles';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors';


import MenuItem from '../menu-item/menu-item.component';


const Directory = ({ sections }) => {
    return (
        <DirectoryMenuContainer>
            {
                sections.map(({ id, ...otherProps }) =>
                    <MenuItem key={id} {...otherProps} />)
            }
        </DirectoryMenuContainer>
    )
}

// reselect
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)