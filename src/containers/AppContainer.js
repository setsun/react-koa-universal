import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';

import styled from 'styled-components';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import IndexContainer from 'containers/IndexContainer';
import NotFoundContainer from 'containers/NotFoundContainer';

const AppWrapper = styled.div`
  margin-top: 1rem;
`

const NavigationContainer = styled.ul`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  list-style-type: none;
  margin: 1rem;
  padding: 0;
`;

const NavigationLinkContainer = styled.li`
  display: inline;
  margin-left: 1.25rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #999;

  &:visited {
    color: #999;
  }

  &:active {
    color: #000;
  }
`;

const Navbar = () => {
  return (
    <NavigationContainer>
      <NavigationLinkContainer>
        <StyledLink to='/'>Home</StyledLink>
      </NavigationLinkContainer>
      <NavigationLinkContainer>
        <StyledLink to='/whoops'>Whoops</StyledLink>
      </NavigationLinkContainer>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Route render={({location}) => (
      <AppWrapper>
        <Navbar />
        <CSSTransitionGroup
          transitionName="easeIn"
          transitionEnterTimeout={300}
          transitionLeave={false}>
          <div key={location.key}>
            <Switch>
              <Route exact path='/' component={IndexContainer} />
              <Route component={NotFoundContainer} />
            </Switch>
          </div>
        </CSSTransitionGroup>
      </AppWrapper>
    )}/>
  );
};
