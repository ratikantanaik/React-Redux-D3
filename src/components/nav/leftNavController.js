import React from 'react';
import { connect } from 'react-redux';
import leftNavActions from '../../store/actions/leftNavActions';
import { Link, withRouter } from 'react-router-dom';

class LeftNav extends React.Component{

    handleLeftNav = (event) => {
        this.props.navSelect(event.target.name);
    }

    componentDidMount(){
        this.props.loadNav({userId: 2000});
        this.unlisten = this.props.history.listen((location, action) => {
            this.props.navSelect();
        });
    }

    componentWillUnmount(){
        this.unlisten();
    }

    render(){
        const leftNavList = this.props.leftNav.leftNavList.map((nav) => {
            return <Link key={nav.url}
                to={'/' + nav.url} 
                name={nav.url} 
                onClick={this.handleLeftNav} 
                className={nav.css} >
                { nav.displayName }
            </Link>
        });

        return(
            <ul className="list-group" style={{backgroundColor: 'white'}}>
                { leftNavList }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        leftNav: state.leftNav
    }
}

const mapDispatchToProps = {
        navSelect: leftNavActions.navSelect,
        loadNav: leftNavActions.loadNav
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftNav));