import React from '../../../node_modules/react';
import { Link } from '../../../node_modules/react-router-dom';
import { Container, Menu } from '../../../node_modules/semantic-ui-react';

import routes from '../../consts/routes';

const NavBar = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <Link to={routes.home}>InventoryKeep</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={routes.home}>Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={routes.addInventory}>Add Inventory</Link>
        </Menu.Item>
        {false && (
          <React.Fragment>
            <Menu.Item>Logout</Menu.Item>
            <Menu.Item>
              <Link to={routes.login}>Login</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to={routes.signup}>Create Account</Link>
            </Menu.Item>
          </React.Fragment>
        )}
      </Container>
    </Menu>
  </div>
);

export default NavBar;
