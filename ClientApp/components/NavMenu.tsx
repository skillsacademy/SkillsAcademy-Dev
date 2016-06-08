import * as React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

function handleTouchTap() {
    alert('onTouchTap triggered on the right icon component');
}

export class NavMenu extends React.Component<any, void> {
    public render() {
        return <AppBar
            title='The Skills Academy'
            onRightIconButtonTouchTap={handleTouchTap}
            iconElementRight={
                <IconMenu
                    iconButtonElement={
                        <IconButton><MoreVertIcon /></IconButton>
                    }
                    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                    <MenuItem primaryText='Home' />
                    <MenuItem primaryText='Counter' />
                    <MenuItem primaryText='Fetch Data' />
                </IconMenu>
            }
        />;
    }
}
