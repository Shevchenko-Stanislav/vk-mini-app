import style from "./popularAwards.module.css";
import { ReactComponent as ChevronIcon } from "../../assets/img/chevron-right.svg";
import { HorizontalScroll, Group, CardScroll, Card, IconButton } from "@vkontakte/vkui";
import PopularAwardItem from "./PopularAwardItem/PopularAwardItem";
import award from "../../assets/img/award.jpeg"

let PopularAwardsCardSlider = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.headerWrapper} style={{marginLeft: 16}}>
        <div className="sectionHeader">Популярные призы</div>
        <IconButton style={{padding: 12}}>
          <ChevronIcon />
        </IconButton>
      </div>
      <CardScroll size="s">
        <div style={{display: "flex", gap: 8}}>
          <Card style={{maxWidth: 316}}>
            <PopularAwardItem/>
          </Card>
          <Card style={{maxWidth: 316}}>
            <PopularAwardItem/>
          </Card>
          <Card style={{maxWidth: 316}}>
            <PopularAwardItem/>
          </Card>
          <Card style={{maxWidth: 316}}>
            <PopularAwardItem/>
          </Card>
          <Card style={{maxWidth: 316}}>
            <PopularAwardItem/>
          </Card>
        </div>
      </CardScroll>
    </div>
  );
};

export default PopularAwardsCardSlider;
