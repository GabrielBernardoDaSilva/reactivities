import React from "react";
import { Image, List, Popup } from "semantic-ui-react";
import { IAttendee } from "../../../app/models/Activity";

interface IProps {
  attendees: IAttendee[];
}

const ActivityListItemAttendees: React.FC<IProps> = ({ attendees }) => {
  return (
    <List horizontal>
      {attendees.map((attendee) => (   
        <List.Item key={attendee.userName}>
          <Popup
            header={attendee.displayName}
            trigger={
              <Image
                size="mini"
                circular
                src={attendee.image || `/assets/user.png`}
              />
            }
          />
        </List.Item>
      ))}
    </List>
  );
};

export default ActivityListItemAttendees;
