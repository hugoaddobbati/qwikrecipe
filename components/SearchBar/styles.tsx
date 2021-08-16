import styled from 'styled-components';
import {default as SearchButtonComponent} from './SearchButton';
import {default as SearchTextComponent} from './SearchText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const SearchBar = styled.div`
    margin-top: 50px;
    width: 50vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

SearchBar.SearchButton = styled(Button)`
    width: 10%;
    
    .MuiButton-containedPrimary{
        border-radius: 0px !important;
    }
    .MuiButton-root{
        border-radius: 0px !important;
    }
    .MuiButton-containedPrimary{
        border-radius: 0px !important;
    }
    .MuiTouchRipple-root{
        border-radius: 0px !important;
    }
`;

SearchBar.SearchText = styled(TextField)`
    width: 90%;

    .MuiFormControl-root{
        margin: 0px !important;
        border-radius: 0px !important;
        border: 0px;
    }
    .MuiInputBase-root fieldset{
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
        border-radius: 0px !important;
        border: 0px;
    }
    .MuiInputBase-input{
        border-radius: 0px !important;
    }
`;