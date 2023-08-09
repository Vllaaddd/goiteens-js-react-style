import { styled } from "styled-components"

const StyledWrapper = styled.div`
    width: 410px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
`;

const StyledTitle = styled.h2`
    margin: 0;
    margin-bottom: 10px;
`;

const StyledList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
`;

const StyledItem = styled.li`
    width: 100px;
    border-radius: 20px;
    padding: 10px;
    text-align: center;
    font-weight: bold;
`;

export default function Difficulty({difficulty}){
    return(
        <StyledWrapper>
            <StyledTitle>Difficulty</StyledTitle>
            <StyledList>
                <StyledItem className={difficulty === 0 ? "marked" : 'non-marked'}>Easy</StyledItem>
                <StyledItem className={difficulty === 1 ? "marked" : 'non-marked'}>Medium</StyledItem>
                <StyledItem className={difficulty === 2 ? "marked" : 'non-marked'}>Hard</StyledItem>
            </StyledList>
        </StyledWrapper>
    )
}