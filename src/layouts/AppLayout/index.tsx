import * as React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: ${({ theme }) => theme.spacing[3]};
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing[3]};
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray};

  &:visited {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:active {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Navbar = ({ currentPath }) => {
  return (
    <LinkContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/whoops">Whoops</StyledLink>
    </LinkContainer>
  );
};

export default () => (
  <Route
    render={({ location }) => (
      <>
        <Navbar currentPath={location.pathname} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </>
    )}
  />
);
