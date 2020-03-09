import React from "react";
import Landing from "./landing";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { connect } from "react-redux";

import Home from "./home";
import Profile from "./profile";
import { auth } from "./_reducers/auth";
import { getAuth, autoAuth } from "./_actions/auth";

class Routers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirst: true
    };
  }
  componentDidMount() {
    this.props.autoAuth();
    
  }
  render() {
    console.log("aut", this.props.auth);
    const { authenticated, loading, error } = this.props.auth;
    //const authenticated = true;
    console.log("loading,", loading);
    console.log("authenticated,", authenticated);
    
    let routes = (
      <Switch>
        <Route path="/" exact component={Landing} />
        <Redirect to="/" />
      </Switch>
    );

    if (authenticated) {
      routes = (
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      );
    }
    return <Router>{routes}</Router>;
    // return (
    //   <Router>
    //     {loading ? (
    //       <div style={{ textAlign: "center" }}>Loading...</div>
    //     ) : (
    //       <>
    //         {!authenticated ? (
    //           <Switch>
    //             <Route exact path="/">
    //               <Landing />
    //             </Route>

    //             <Redirect to="/" />
    //             {/* {loading ? <div>Loading...111</div> : <Redirect to="/" />} */}
    //           </Switch>
    //         ) : (
    //           <Switch>
    //             <Route path="/home">
    //               <Home />
    //             </Route>
    //             <Route path="/profile">
    //               <Profile />
    //             </Route>
    //             {/* {loading ? <div>Loading...</div> : <Redirect to="/home" />} */}
    //             <Redirect to="/home" />
    //           </Switch>
    //         )}
    //       </>
    //     )}

    //     {/* <Switch>

    //       <Route path="/home">
    //         {authenticated ? <Home /> : <Redirect to="/" />}
    //       </Route>
    //       <Route path="/profile">
    //         {authenticated ? <Profile /> : <Redirect to="/" />}
    //       </Route>
    //        <Route exact path="/">
    //         {!authenticated ? <Landing /> : <Redirect to="/home" />}
    //       </Route>

    //     </Switch> */}
    //     {/* <PrivateRoute
    //         exact
    //         path="/profile"
    //         component={Profile}
    //         authenticated={this.props.authenticated}
    //       /> */}
    //   </Router>
    // );
  }
}

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoAuth: () => dispatch(getAuth())
    //autoAuth: () => dispatch(autoAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routers);
