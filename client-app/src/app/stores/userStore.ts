import { action, computed, observable, runInAction } from "mobx";
import { act } from "react-dom/test-utils";
import { history } from "../..";
import agent from "../api/agent";
import { IUser, IUserFormValues } from "../models/user";
import { RootStore } from "./rootStore";

export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable user: IUser | null = null;

  @computed get isLoggedIn() {
    return !!this.user;
  }

  @action login = async (values: IUserFormValues) => {
    try {
      const user = await agent.User.login(values);
      runInAction("Get user", () => {
        this.user = user;
        this.rootStore.commonStore.setToken(user.token);
      });
      console.log(user);
      this.rootStore.modalStore.closeModal();
      history.push("/activities");
    } catch (error) {
      throw error;
    }
  };

  @action logout = () => {
    this.rootStore.commonStore.setToken(null);
    this.user = null;
    history.push("/");
  };

  @action getUser = async  () => {
    try {
      const user = await agent.User.current();
      runInAction("Get current user", () => {
        this.user = user;
      })

    } catch (error) {
      console.log(error)
    }
  }

  @action register = async (values: IUserFormValues) => {
    try {
      const user =await agent.User.register(values);
      this.rootStore.commonStore.setToken(user.token);
      this.rootStore.modalStore.closeModal();
      history.push("/activities");
    } catch (error) {
      throw error;
    }
  }
}
