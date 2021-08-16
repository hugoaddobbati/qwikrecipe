import * as React from 'react';
import { IRoute } from "../../interfaces/routes";

import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import RecipesList from '../../components/RecipesList';
import * as S from './styles';

export interface HomeProps extends IRoute {
    setSelectedRecipe?: Function;
    setFilterQuery: Function;
    requestRecipes: Function;
    pagination: any;
    requestFromUrl: Function;
}

const Home: React.FunctionComponent<HomeProps> = ({ requestFromUrl, pagination, requestRecipes, setCurrentRoute, setSelectedRecipe, setFilterQuery}) => {
    return (
        <S.Container>
            <SearchBar requestRecipes={requestRecipes} setFilterQuery={setFilterQuery}/>
            <RecipesList setCurrentRoute={setCurrentRoute} setSelectedRecipe={setSelectedRecipe}/>
            <Pagination pagination={pagination} requestFromUrl={requestFromUrl}/>
        </S.Container>
    );
}

export default Home;