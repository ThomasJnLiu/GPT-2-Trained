import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import MainPage from './component/MainPage/MainPage';

class App extends Component {

    componentDidMount(){
    }

    render() {
        return (

            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={() => <MainPage />}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>

        );
    }
}

export default App;
