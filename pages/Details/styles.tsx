import styled from 'styled-components';
import {default as MaterialLink}  from '@material-ui/core/Link';
import {default as MaterialSkeleton} from '@material-ui/lab/Skeleton';

export const Link = styled(MaterialLink)`
    cursor: pointer;
`

export const SkeletonBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 50px;
    margin-top: 50px;
`;

export const SkeletonDivider = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const SkeletonContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 630px;
`


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    width: 60vw;
`

export const Title = styled.h2`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
`

export const Ingredients = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 2px;
    margin-bottom: 60px;
`
Ingredients.Title = styled.h3`
    font-family: "Poppins", sans-serif;
    text-align: start;
    vertical-align: middle;
    margin-top: 0px;
`;

Ingredients.List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;
Ingredients.Ingredient = styled.h5`
    font-family: "Poppins", sans-serif;
    text-align: start;
    vertical-align: middle;
    margin-top: 2px;
    margin-bottom: 2px;
`

export const InfoContainer = styled.div`
    width: 500px;
    @media screen and (max-width: 750px){
        width: 250px;
    }
    padding: 10px;
`;

export const BadgeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    width: 500px;
    @media screen and (max-width: 750px){
        width: 250px;
    }
`

export const Image = styled.img`
    width: 500px;
    height: 500px;
    object-fit: contain;
    @media screen and (max-width: 750px){
        width: 250px;
        height: 250px;
    }
    
`