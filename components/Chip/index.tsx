import React from 'react';
import { default as MaterialChip } from '@material-ui/core/Chip';

export interface ChipProps {
    label: string;
    primary?: boolean;
}


const Chip: React.FunctionComponent<ChipProps> = ({ label, primary }) => {
    return (
        <MaterialChip label={label} style={{
            boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
            backgroundColor: primary ? "#ee9090" : "#eebf90",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 900
        }} />
    );
}

export default Chip;
