import React from 'react';
import TextField from '@material-ui/core/TextField';
import * as S from './styles';
import { makeStyles } from '@material-ui/core/styles';


export interface TextInputProps {
    onChange?,
}

const useStyles = makeStyles({
    
});

const SearchText: React.FunctionComponent<TextInputProps> = ({onChange}) => {
    return (
        <TextField
          id="outlined-full-width"
          placeholder="Placeholder"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    );
}

export default SearchText;

