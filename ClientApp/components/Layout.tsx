import * as React from 'react';
import { NavMenu } from './NavMenu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, lightBaseTheme} from 'material-ui/styles';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

export interface LayoutProps {
    body: React.ReactElement<any>;
}

export class Layout extends React.Component<LayoutProps, void> {
    public render() {
        return <MuiThemeProvider muiTheme={lightMuiTheme}>
            <div className='row'>
                <div className='col-sm-3'>
                    <NavMenu />
                </div>
                <div className='col-sm-9'>
                    { this.props.body }
                </div>
            </div>
        </MuiThemeProvider>;
    }
}
