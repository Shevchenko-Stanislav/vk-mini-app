import React from "react";
import PropTypes from "prop-types";
import style from "./Home.module.css";
import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
} from "@vkontakte/vkui";
import StayInTouch from "../components/StayInTouch/StayInTouch";
import SearchIcon from "../components/UI/SearchIcon";
import Balanse from "../components/Balanse/Balanse";
import QuestSwiper from "../components/QuestSwiper/QuestSwiper";
import PopularAwards from "../components/PopularAwards/PopularAwards"
import PopularAwardsCardSlider from "../components/PopularAwards/PopularAwardsCardSlider"
import TestGallery from "../components/TestGallery/TestGallery"

const Home = ({ id, fetchedUser }) => {
  React.useEffect(() => {
    console.log("MOUNT_HOME");
  }, [])

  return(
  <Panel id={id}>
    <PanelHeader>Хочу здесь жить*</PanelHeader>
    <div style={{backgroundColor: "#F2F4F7"}}>
        {fetchedUser && (
          <Div>
          <div className={style.helloWrapper}>
            <div className={style.helloInner}>
              {fetchedUser.photo_200 && <Avatar src={fetchedUser.photo_200} />}
              <div className={style.helloText}>
                <div className={style.smalText}>Привет,</div>
                <div className={style.nameText}>{fetchedUser.first_name}</div>
              </div>
            </div>
            <SearchIcon />
          </div>
          </Div>
        )}

        <Balanse />
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3a0377bf79cc928140c9776904dc6f9661dea5182679a088d81e3fb7195bccb7&amp;source=constructor"></iframe>
        <StayInTouch />
        <QuestSwiper />
        <PopularAwards />
        <PopularAwardsCardSlider />
        <TestGallery/>
    </div>
  </Panel>
)};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
