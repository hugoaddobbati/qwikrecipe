import styled from 'styled-components';

export const RecipesList = styled.div`
    margin-top: 20px;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 230px);
    justify-content: space-around;
    grid-gap: 20px;
    
`;

export const RecipesSkeleton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 195px;
`
