import style from "./QuestSwiperItem.module.css"
import { Div, IconButton } from "@vkontakte/vkui"
import {ReactComponent as Heart} from "../../../assets/img/heart.svg"
import runImg from "../../../assets/img/manRun.png"

let QuestSwiperItem = () => {
  return (
    <div className={style.wrapper}>
      <img className={style.img} src={runImg}/>
      <div className={style.description}>
        <div className={style.eventTitle}>
          Название мероприятия максимум три строки, а если больше то...
        </div>
        <div className={style.footer}>
          <div className={style.price}>
            +758 ☘️
          </div>
          <IconButton style={{padding: 12}}>
            <Heart/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default QuestSwiperItem