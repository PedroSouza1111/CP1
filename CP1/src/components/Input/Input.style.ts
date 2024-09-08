import styled from "styled-components";

export const StyledInput = styled.input`
    border: 1px solid #D0D0D0;
    padding: 8px 60px 8px 8px;
    border-radius: 6px;
    margin-bottom: 8px;
    &::placeholder {
        color: #B8B8B8;
    }
`
export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.2rem;
    margin-right: 1rem;
`

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 0.6rem;
`

export const StyledArticle = styled.article`
    display: flex;
    border-bottom: 1px solid #D0D0D0;
    margin: 0.5rem 1.2rem;
    padding-bottom: 0.7rem;
    padding-left: 0.4rem;
    align-items: center;
`

export const StyledParagraph = styled.p`
    margin-left: 0.5rem;
`