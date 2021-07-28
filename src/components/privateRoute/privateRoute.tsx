import {Route} from "react-router-dom";
import React from "react";
import {Redirect} from 'react-router'
import {useSelector} from "react-redux";

function PrivateRoute(prop:any) {
    let isLogin:any = useSelector(state => state)
    isLogin = true

    console.log(isLogin)
    if (prop.loginreq && !isLogin){
        return <Redirect to={'/'}/>

    }else {
        return <Route path={prop.path} exact={prop.exact} render={props => <prop.Component {...props}></prop.Component>}></Route>
    }

}

export default PrivateRoute