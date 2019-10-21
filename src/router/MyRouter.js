import React, {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'

import Index from '../components/Index'
import Xiangqing from '../components/Xiangqing'
import Collect from '../components/Collect'
import Comment from '../components/Comment'
class MyRouter extends Component {
    render() {
        return(
            <div>
            <Switch>
                <Route path="/Index" component={Index} />
                <Route path="/Xiangqing" component={Xiangqing}/>
                <Route path="/Collect" component={Collect}/>
                <Route path="/Comment" component={Comment}/>
                <Redirect to="/" />
            </Switch>
            </div>
        )
    }
}

export default MyRouter