import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Item, Segment, Image } from "semantic-ui-react";
import { IActivity } from "../../../app/models/Activity";
import { RootStore, RootStoreContext } from "../../../app/stores/rootStore";

const activityImageStyle = {
  filter: "brightness(30%)",
};

const activityImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};

const ActivityDetailedHeaders: React.FC<{ activity: IActivity }> = ({
  activity,
}) => {
  const rootStore = useContext(RootStoreContext);
  const {attendActivity, cancelAttendance, loading} = rootStore.activityStore;
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={
            activity.category != null
              ? `/assets/categoryImages/${activity.category}.jpg`
              : "/assets/placeholder.png"
          }
          fluid
          style={activityImageStyle}
        />
        <Segment basic style={activityImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={activity.title}
                  style={{ color: "white" }}
                />
                <p>{format(activity.date, "eeee do MMMM")}</p>
                <p>
                  Hosted by <strong>Bob</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment clearing attached="bottom">
        {activity.isHost ? (
          <Button
            color="orange"
            as={Link}
            to={`/manage/${activity.id}`}
            floated="right"
          >
            Manage Event
          </Button>
        ) : activity.isGoing ? (
          <Button onClick={cancelAttendance} loading={loading}>Cancel attendance</Button>
        ) : (
          <Button onClick={attendActivity} color="teal" loading={loading}>Join Activity</Button>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default observer(ActivityDetailedHeaders);
