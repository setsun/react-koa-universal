import * as React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';

const AppWrapper = styled.div`
  margin-top: 1rem;
`;

const TextCenter = styled.div`
  text-align: center;
`;

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
        <StyledLink to="/">Home</StyledLink>
      </NavigationLinkContainer>
      <NavigationLinkContainer>
        <StyledLink to="/whoops">Whoops</StyledLink>
      </NavigationLinkContainer>
    </NavigationContainer>
  );
};

export default () => (
  <Route
    render={({ location }) => (
      <AppWrapper>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TextCenter>
                <h2>
                  <FormattedMessage
                    id="index.header"
                    defaultMessage="React Apollo Starter"
                  />
                </h2>
                <FormattedMessage
                  id="index.message"
                  defaultMessage="To get started, edit {fileName} and save to reload."
                  values={{
                    fileName: <code>src/app.client.js</code>,
                  }}
                />
              </TextCenter>
            )}
          />
        </Switch>
      </AppWrapper>
    )}
  />
);
