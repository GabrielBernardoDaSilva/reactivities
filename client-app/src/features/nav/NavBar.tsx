import React from "react";
import { Button, Container } from "semantic-ui-react";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";

interface IProps{
  openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({openCreateForm}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
            Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
            <Button positive content="Create Activity" onClick={openCreateForm}/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
