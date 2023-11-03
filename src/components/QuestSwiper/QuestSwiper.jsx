import { useEffect, useState } from "react";
import style from "./QuestSwiper.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Div, Header, IconButton } from "@vkontakte/vkui";
import {ReactComponent as ChevronIcon} from "../../assets/img/chevron-right.svg"
import QuestSwiperItem from "./QuestSwiperItem/QuestSwiperItem";

let QuestSwiper = () => {
  return (
    <>
      <Header aside={<IconButton style={{padding: 12}}><ChevronIcon /></IconButton>}>
        <div className="sectionHeader">
          Новые задания
        </div>
      </Header>
      <div>
        <Swiper
          spaceBetween={8}
          width={198}
          speed={135}
        >
          <SwiperSlide style={{marginLeft: 16}}>
              <QuestSwiperItem/>
          </SwiperSlide>
          <SwiperSlide>
            <QuestSwiperItem/>
          </SwiperSlide>
          <SwiperSlide>
            <QuestSwiperItem/>
          </SwiperSlide>
          <SwiperSlide>
            <QuestSwiperItem/>
          </SwiperSlide>
          <SwiperSlide>
            <QuestSwiperItem/>
          </SwiperSlide>
          <SwiperSlide>
              <QuestSwiperItem/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default QuestSwiper