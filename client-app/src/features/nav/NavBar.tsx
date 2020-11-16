import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";



const NavBar: React.FC = () => {

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item exact header as={NavLink} to='/'>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" as={NavLink} to='/activities' />
        <Menu.Item>
          <Button
            positive
            content="Create Activity"
            as={NavLink} to='/createactivity'
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
