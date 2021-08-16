import React from 'react';
import * as S from './styles';
import { IRoute } from '../../interfaces/routes';

interface NavbarProps extends IRoute {
    requestRecipes: Function;
};

const Navbar: React.FunctionComponent<NavbarProps> = ({ setCurrentRoute, requestRecipes }) => {
    return (
        <S.Navbar>
            <S.Navbar.Header onClick={() => { requestRecipes(); setCurrentRoute("home"); }}>
                QwikRecipe
            </S.Navbar.Header>
        </S.Navbar>
    );
}

export default Navbar;

