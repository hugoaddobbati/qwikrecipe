import * as React from 'react';
import * as S from "./styles";

import { useData } from '../../contexts/recipes';

import Skeleton from '@material-ui/lab/Skeleton';
import { IRoute } from '../../interfaces/routes';
import Card from "../Card";
import { useIsLoading } from '../../contexts/loading';

export interface RecipesListProps extends IRoute{
    setSelectedRecipe?: Function;
}

const RecipesList: React.FunctionComponent<RecipesListProps> = ({setCurrentRoute, setSelectedRecipe}) => {
    const { data, setState } = useData();
    const { isLoading, setIsLoading } = useIsLoading();
    const handleClick = (id, route) => {
        setCurrentRoute(route);
        setSelectedRecipe(id);
    }
    return (
        <S.RecipesList>
            {
                !isLoading ?
                    data.map(recipe => {
                        return <Card handleClick={handleClick} imgUrl={recipe.image} recipeName={recipe.label} id={recipe.uri.split("recipe_")[1]}/>
                    })
                    :
                    <>
                        {
                        [...Array(20).keys()].map(e => 
                        <S.RecipesSkeleton>
                            <Skeleton animation="wave" variant="rect" width={240} height={140} />
                            <Skeleton animation="wave" variant="rect" width={240} height={35} />
                        </S.RecipesSkeleton>
                        )}
                    </>
            }
        </S.RecipesList>
    );
}

export default RecipesList;