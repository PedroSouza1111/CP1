import { BiHome, BiUser} from "react-icons/bi";
import { FiFilePlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledWrapperMenu>
                <StyledMenuItem>
                    <BiHome size="1.5rem" color="#38aede" />
                    <Link to="/">Home</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <FiFilePlus size="1.5rem" color="#38aede" />
                    <Link to="/">Nova Lista</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiUser size="1.5rem" color="#38aede" />
                    <Link to="/perfil">Perfil</Link>
                </StyledMenuItem>
            </StyledWrapperMenu>
        </StyledMenu>
    )
};