import { IActivity } from "../../models/Activity";
import { IUser } from "../../models/user";

export const combinedDateAndTime = (date: Date, time: Date) => {
  const timeString = time.getHours() + ":" + time.getMinutes() + ":00";
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dateString = `${year}-${month}-${day}`;

  return new Date(dateString + " " + timeString);
};

export const setActivityProps = (activity: IActivity, user: IUser) => {
  activity.date = new Date(activity.date);
  activity.attendees.forEach(att =>{
    console.log(att)
  })
  activity.isGoing = activity.attendees.some(
    (a) => a.userName === user.username
  );
  activity.isHost = activity.attendees.some(
    (a) => a.userName === user.username && a.isHost
  );
  console.log(user.username);
  console.log(activity);;
  return activity;
};
