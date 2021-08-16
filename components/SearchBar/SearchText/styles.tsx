import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

export const Input = styled(TextField)`
    .MuiFormControl-root{
        margin: 0px !important;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
        border-radius: 0px !important;
    }
    .MuiInputBase-root{
        border-radius: 0px !important;
    }
    .MuiInputBase-input{
        padding: 8.5px !important;
        border-radius: 0px !important;
    }
`