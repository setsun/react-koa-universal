import * as React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-left: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.gray};

  &:visited {
    color: ${props => props.theme.colors.gray};
  }

  &:active {
    color: ${props => props.theme.colors.black};
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
