import style from "./popularAwards.module.css";
import { ReactComponent as ChevronIcon } from "../../assets/img/chevron-right.svg";
import { HorizontalScroll, IconButton, HorizontalCell } from "@vkontakte/vkui";
import PopularAwardItem from "./PopularAwardItem/PopularAwardItem";

let PopularAwards = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.headerWrapper} style={{marginLeft: 16}}>
        <div className="sectionHeader">Популярные призы</div>
        <IconButton style={{padding: 12}}>
          <ChevronIcon />
        </IconButton>
      </div>
      <HorizontalScroll
        getScrollToLeft={(i) => i - 332}
        getScrollToRight={(i) => i + 332}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{minWidth: 8}}></div>
          <PopularAwardItem />
          <PopularAwardItem />
          <PopularAwardItem />
          <PopularAwardItem />
          <PopularAwardItem />
          <PopularAwardItem />
          <PopularAwardItem />
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default PopularAwards;
