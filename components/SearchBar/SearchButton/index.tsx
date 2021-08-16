import Button from '@material-ui/core/Button';

export interface ButtonProps {
    onClick,
    label
}

const SearchButton: React.FunctionComponent<ButtonProps> = ({onClick, label}) => {
    return (
    <Button variant="contained" onClick={onClick} color="primary" href="#contained-buttons">
        {label}
    </Button>
    );
}

export default SearchButton;