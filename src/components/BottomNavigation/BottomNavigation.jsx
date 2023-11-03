import style from "./bottomNavigation.module.css";
import {
  Epic,
  Tabbar,
  TabbarItem,
  View,
  Panel,
  Div,
  PanelHeader,
  PanelHeaderBack,
  SplitLayout,
  ScreenSpinner,
  SplitCol,
  usePlatform,
  useAdaptivityConditionalRender,
  PullToRefresh
} from "@vkontakte/vkui";
import { useState, useEffect, useCallback } from "react";
import bridge from "@vkontakte/vk-bridge";
import "@vkontakte/vkui/dist/vkui.css";
import Home from "panels/Home";
import { ReactComponent as HomeIcon } from "assets/img/home.svg";
import { ReactComponent as QuestIcon } from "assets/img/services.svg";
import Quests from "panels/Quests/Quests";

let BottomNavifation = () => {
  const [activeStory, setActiveStory] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(null);
  const platform = usePlatform();
  const { viewWidth } = useAdaptivityConditionalRender();

  const [fetching, setFetching] = useState(false);

  const onRefresh = useCallback(() => {
    setFetching(true);

    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
      setFetching(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);

  const setActiveStyle = (activeStoryName) => {
    if (activeStoryName === activeStory) {
      return style.activeStory;
    }
    return style.defaultColor;
  };

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <Epic
          activeStory={activeStory}
          tabbar={
            <Tabbar className={viewWidth.tabletMinus.className}>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === "home"}
                data-story="home"
              >
                <div className={style.iconWrapper}>
                  <HomeIcon fill="#99A2AD" className={setActiveStyle("home")} />
                  <div className={`${style.text} ${setActiveStyle("home")}`}>
                    Главная
                  </div>
                </div>
              </TabbarItem>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === "quests"}
                data-story="quests"
              >
                <div className={style.iconWrapper}>
                  <QuestIcon
                    fill="#99A2AD"
                    className={setActiveStyle("quests")}
                  />
                  <div className={`${style.text} ${setActiveStyle("quests")}`}>
                    Задания
                  </div>
                </div>
              </TabbarItem>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === "prizes"}
                data-story="prizes"
              >
                <div className={style.iconWrapper}>
                  <QuestIcon
                    fill="#99A2AD"
                    className={setActiveStyle("prizes")}
                  />
                  <div className={`${style.text} ${setActiveStyle("prizes")}`}>
                    Призы
                  </div>
                </div>
              </TabbarItem>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === "successes"}
                data-story="successes"
              >
                <div className={style.iconWrapper}>
                  <QuestIcon
                    fill="#99A2AD"
                    className={setActiveStyle("successes")}
                  />
                  <div
                    className={`${style.text} ${setActiveStyle("successes")}`}
                  >
                    Успехи
                  </div>
                </div>
              </TabbarItem>
              <TabbarItem
                onClick={onStoryChange}
                selected={activeStory === "profile"}
                data-story="profile"
              >
                <div className={style.iconWrapper}>
                  <QuestIcon
                    fill="#99A2AD"
                    className={setActiveStyle("profile")}
                  />
                  <div className={`${style.text} ${setActiveStyle("profile")}`}>
                    Профиль
                  </div>
                </div>
              </TabbarItem>
            </Tabbar>
          }
        >
          <View id="home" activePanel="home">
            <PullToRefresh id="home" onRefresh={onRefresh} isFetching={fetching}>
              <Home id="home" fetchedUser={fetchedUser} />
            </PullToRefresh>
          </View>
          <View id="quests" activePanel="quests">
            <Panel id="quests">
              <PanelHeader>Задания</PanelHeader>
              <Quests />
            </Panel>
          </View>
          <View id="prizes" activePanel="prizes">
            <Panel id="prizes">
              <PanelHeader>Призы</PanelHeader>
              <div>Призы</div>
            </Panel>
          </View>
          <View id="successes" activePanel="successes">
            <Panel id="successes">
              <PanelHeader>Успехи</PanelHeader>
              <div>Успехи</div>
            </Panel>
          </View>
          <View id="profile" activePanel="profile">
            <Panel id="profile">
              <PanelHeader>Профиль</PanelHeader>
              <div>Профиль</div>
            </Panel>
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};

export default BottomNavifation;
