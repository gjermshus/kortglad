import React from 'react';
import { RefereeSearchBox } from '../components/RefereeSearchBox/index';


export class App extends React.Component<null, null> {
    public render(): any {
        return (
            <div>
                <h1>Kortglad!</h1>
                <p>Sjekk kortstatistikk for dommer</p>
                <RefereeSearchBox />
            </div>
        );
    }
}

export default App;