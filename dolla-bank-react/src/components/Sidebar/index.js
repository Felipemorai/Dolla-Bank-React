import React from 'react';
import { 
SidebarContainer,
Icon,
CloseIcon
} from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper></SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar