import styled from 'styled-components';

import { useClearControls } from '../features/controls/useClearControls';

import { Link } from 'react-router-dom';

import { Container } from './Container';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const Header = () => {
  const clearAllFilters = useClearControls();

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title onClick={clearAllFilters}>Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};
