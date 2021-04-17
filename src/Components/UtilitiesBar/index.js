import { UtilitiesBarContainer, SearchBar } from "./style";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from "react-router-dom";

import * as ContactActions from "../../store/actions/contacts";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const UtilitiesBar = ({setFilter}) =>{

    const handleChange = (e) => {
        setFilter(e.target.value);
    }

    return(
        <UtilitiesBarContainer >
            <SearchBar placeholder="Filter by name" onChange={handleChange}  />

            <Link to="/contact/new" >
                <PersonAddIcon/>
            </Link>
            
        </UtilitiesBarContainer>
    );
}

const mapStateToProps = (state) => ({
    contacts: state.contacts.list,
    filter: state.contacts.filter,
    
});

const mapDispatchToProps = (dispatch) =>
bindActionCreators( ContactActions , dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UtilitiesBar);