import * as React from 'react';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../store';
import * as DialogStore from '../store/DialogPage';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class DialogPage extends React.Component<DialogProps, void> {

    public render() {
        const standardActions = (
            <FlatButton
                label="OK"
                secondary={true}
                onTouchTap={ () => this.props.close() }
                />
        );
        return <div>
            <Dialog
                open={ this.props.isOpen }
                title="Super Secret Password"
                actions={standardActions}
                onRequestClose={ () => this.props.close() }
                >
                1-2-3-4-5
            </Dialog>
            <h1>Dialog</h1>
            <p>This is a simple example of a dialog component.</p>
            <RaisedButton
                label="Open Dialog"
                onClick={ () => { this.props.open() } }/>
        </div>;
    }
}

// Build the CounterProps type, which allows the component to be strongly typed
const provider = provide(
    (state: ApplicationState) => state.dialogPage, // Select which part of global state maps to this component
    DialogStore.actionCreators                 // Select which action creators should be exposed to this component
);
type DialogProps = typeof provider.allProps;
export default provider.connect(DialogPage);
