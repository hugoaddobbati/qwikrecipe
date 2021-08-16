import * as React from 'react';
import * as S from './styles'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

export interface PaginationProps {
    pagination: any;
    requestFromUrl: Function;
}

const Pagination: React.FunctionComponent<PaginationProps> = ({ requestFromUrl, pagination }) => {
    return (
        <>
            <S.Container>
                <S.PaginationButton>
                    <MdNavigateNext onClick={() => {requestFromUrl(pagination)}}/>
                </S.PaginationButton>
            </S.Container>
        </>
    );
}

export default Pagination;