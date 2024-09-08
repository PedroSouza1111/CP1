import styled from "styled-components";

export const StyledMenu = styled.nav`
    display: flex;
    align-items: flex-start;
    border-top: 2px solid #E8E8E8;
    padding: 4px 1.2rem;
`;

export const StyledWrapperMenu = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;

export const StyledMenuItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;

    & a {
        font-size: 0.8rem;
        color: #3893de;
        font-weight: 600;
    }

`;