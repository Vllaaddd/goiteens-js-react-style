import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import { RecipeInfo } from './RecipeInfo';
import { styled } from 'styled-components';

const StyledList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items:center;
    background-color: #fefefe;
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
    max-width: 410px;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export function Recipe ({name, time, servings, calories, image}){
    return <StyledWrapper>
        <h2>{name}</h2>
        <img src={image} alt="" width="450" />
        <StyledList>
            <RecipeInfo 
                text={`${time} min`} 
                icon={BsAlarm}/>
            <RecipeInfo 
                text={`${servings} servings`} 
                icon={HiOutlineChartPie}/>
            <RecipeInfo 
                text={`${calories} calories`} 
                icon={HiOutlineChartBar}/>
        </StyledList>
    </StyledWrapper>
}