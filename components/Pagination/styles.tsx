import styled from 'styled-components';

export const Container = styled.div`
    width: 10%;
    display: flex;
    margin: auto;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const PaginationButton = styled.div`
    border: 1px solid #AAA;
    cursor: pointer;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    vertical-align: middle;
    border-radius: 5px;
`