import React from 'react';
import * as S from './safe.style';;
import { Container } from '@mui/material';
const Safe = () => {
    return (
        <S.SafeContainer>
            <Container>
                Ambiente seguro <i className={'twf-lock'}/>
            </Container>
        </S.SafeContainer>
    );
}

export default Safe;