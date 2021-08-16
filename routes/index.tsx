import * as React from 'react';
import Home from "../components/Home";
import Details from "../components/Details";

import { IRoute } from "../interfaces/routes";

import * as S from "./styles";

export interface RoutesProps extends IRoute {
    currentRoute: string;
    setSelectedRecipe: Function;
    selectedRecipe: string;
    setFilterQuery: Function;
    requestRecipes: Function;
    pagination: any;
    requestFromUrl: Function;
}


const Routes: React.FunctionComponent<RoutesProps> = ({ requestFromUrl, pagination, requestRecipes, selectedRecipe, currentRoute, setCurrentRoute, setSelectedRecipe, setFilterQuery }) => {
    const ROUTES = {
        'home': <Home requestFromUrl={requestFromUrl} pagination={pagination} requestRecipes={requestRecipes} setFilterQuery={setFilterQuery} setCurrentRoute={setCurrentRoute} setSelectedRecipe={setSelectedRecipe}/>,
        'details': <Details selectedRecipe={selectedRecipe} setCurrentRoute={setCurrentRoute} setSelectedRecipe={setSelectedRecipe}/>
    }
    
    return (
        <S.RouteContainer>
            {
                ROUTES[currentRoute]
            }
        </S.RouteContainer>
        );
}

export default Routes;