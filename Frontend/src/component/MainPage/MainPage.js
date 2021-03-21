import React, {Component} from 'react';
import { Input, message } from 'antd';
import UserService from '../../common/service' ;
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css'
import './MainPage.css';

const { Search } = Input;

class MainPage extends Component{

    state = {
        loading: false
      };

    componentDidMount(){

    }

    startMatch = (input) =>{
        this.setState({
            loading: true,
            result: ''
          })
        let data = {'text': input}
        UserService.upload_text(JSON.stringify(data)).then((response) =>{
            this.setState({
              loading: false,
              result: response.result
            })
          }).catch((error) =>{
            this.setState({
                loading: false
              })
            message.error(error.message)
          })

    }

    render(){
        return(
            <div className='main-page-box'>
                <div>
                    <h2>Input:</h2>
                    <Search placeholder="input search text" enterButton="Search" size="large" loading={this.state.loading} onSearch={this.startMatch}/>
                </div>
                <div className='output-box'>
                    <h2>Output:</h2>
                    {this.state.result}
                </div>
            </div>
        )
    }
}
export default withRouter(MainPage);