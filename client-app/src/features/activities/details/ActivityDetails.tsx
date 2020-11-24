import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Grid, GridColumn } from "semantic-ui-react";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import ActivityStore from "../../../app/stores/activityStore";
import { RootStore, RootStoreContext } from "../../../app/stores/rootStore";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeaders from "./ActivityDetailedHeaders";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

interface DetailParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  const rootStore = useContext(RootStoreContext);
  const { activity, loadActivity, loadingInitial } = rootStore.activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if (loadingInitial || !activity)
    return <LoadingComponent content="Loadin activiy..." />;

  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityDetailedHeaders activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat />
      </GridColumn>
      <GridColumn width={6}>
        <ActivityDetailedSidebar attendees={activity.attendees} />
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDetails);
