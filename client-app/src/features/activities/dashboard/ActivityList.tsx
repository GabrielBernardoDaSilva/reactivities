import React, { SyntheticEvent } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/Activity";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submiting: boolean;
  target: string;
}
export const ActivityList: React.FC<IProps> = ({
  activities,
  selectActivity,
  deleteActivity,
  submiting,
  target,
}) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Content>
                <Item.Header as="a">{activity.title}</Item.Header>
                <Item.Meta>{activity.date}</Item.Meta>
                <Item.Description>
                  <div>{activity.description}</div>
                  <div>
                    {activity.city}, {activity.venue}
                  </div>
                </Item.Description>
                <Item.Extra>
                  <Button
                    onClick={() => selectActivity(activity.id)}
                    floated="right"
                    content="View"
                    color="blue"
                  ></Button>
                  <Button
                    name={activity.id}
                    loading={submiting && target === activity.id}
                    onClick={(e) => deleteActivity(e, activity.id)}
                    floated="right"
                    content="Delete"
                    color="red"
                  ></Button>
                  <Label basic content={activity.category}></Label>
                </Item.Extra>
              </Item.Content>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};