import { styled } from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const RecipeInfo = ({text, icon: Icon}) => {
    return (
        <StyledWrapper>
          <Icon size = {40}/>
          <p>{text}</p> 
        </StyledWrapper>
    )
}