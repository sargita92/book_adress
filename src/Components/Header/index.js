import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";

const Header = () =>{

    return(
        <HeaderContainer >
            <Link to="/">
            <img alt="" src='https://www.clker.com/cliparts/3/9/e/F/7/H/generic-company-logo-md.png' />
            </Link>
            
        </HeaderContainer>
    );
}

export default Header;