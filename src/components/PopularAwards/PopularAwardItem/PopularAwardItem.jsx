import style from "./PopularAwardItem.module.css"
import { IconButton, Group } from "@vkontakte/vkui"
import {ReactComponent as Heart} from "../../../assets/img/heart.svg"
import award from "../../../assets/img/award.jpeg"

let PopularAwardItem = () => {
  return (
    <div style={{display: "block"}}>
      <div className={style.wrapper}>
        <img className={style.img} src={award}/>
        <div className={style.description}>
          <div className={style.eventTitle}>
            Название сувенирной продукции не более трёх строк
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
    </div>
  )
}

export default PopularAwardItem