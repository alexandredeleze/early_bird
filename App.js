import React from 'react';
import TabNavigator from "./navigation/Navigation";
import {Provider} from "react-redux";
import Store from './store/configureStore';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';


export default class App extends React.Component {
    render() {
        let persistor = persistStore(Store);
        return (
            <Provider store={Store}>
                {/*Uncomment if we want persistent data*/}
                <PersistGate persistor={persistor}>
                    <TabNavigator/>
                </PersistGate>
            </Provider>
        );
    }
}
