import React from 'react';
import { connect } from 'react-redux';
import leftNavActions from '../../store/actions/leftNavActions';
import { Link } from 'react-router-dom';

class LeftNav extends React.Component{

    handleLeftNav = (event) => {
        this.props.navSelect(event.target.name);
    }

    componentDidMount(){
        this.props.loadNav({userId: 2000});
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);