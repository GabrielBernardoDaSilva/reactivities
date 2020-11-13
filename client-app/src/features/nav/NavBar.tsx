import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Button, Container } from "semantic-ui-react";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";
import ActivityStore from "../../app/stores/activityStore";



const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button
            positive
            content="Create Activity"
            onClick={activityStore.openCreateForm}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
