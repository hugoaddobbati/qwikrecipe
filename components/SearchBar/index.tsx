import * as React from 'react';
import * as S from './styles';
import { AiOutlineSearch } from "react-icons/ai";
export interface SearchBarProps {
    setFilterQuery: Function;
    requestRecipes: Function;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ requestRecipes, setFilterQuery }) => {
    return (
        <S.SearchBar>
            <S.SearchBar.SearchText
                id="outlined-full-width"
                placeholder="Search"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => { setFilterQuery(e.target.value) }}
                variant="outlined" />
            <S.SearchBar.SearchButton
                variant="contained"
                color="primary"
                onClick={() => { requestRecipes(false) }}
                style={{ borderRadius: 0, height: 56, fontSize: 20, background: "#90EE90", color: "rgba(0,0,0, 0.54)", marginLeft: "-2px" }}
            >
                <AiOutlineSearch />
            </S.SearchBar.SearchButton>
        </S.SearchBar>
    );
}

export default SearchBar;