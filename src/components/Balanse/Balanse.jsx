import style from "./Balanse.module.css"
import CoinImg from "../../assets/img/coin.png"
import { Div } from "@vkontakte/vkui"

let Balanse = () => {
  return (
    <Div>
    <div className={style.balanseWrapper}>
      <div className={`${style.balansItem} ${style.green}`}>
        <div className={style.title}>
          Ваш баланс
        </div>
        <div className={style.count}>
          150
        </div>
        <div className={style.currency}>
          баллов
        </div>
        <img className={style.img} src={CoinImg}/>
      </div>

      <div className={`${style.balansItem} ${style.orange}`}>
        <div className={style.title}>
          Ваш баланс
        </div>
        <div className={style.count}>
          0
        </div>
        <div className={style.currency}>
          монет
        </div>
        <img className={style.img} src={CoinImg}/>
      </div>
    </div>
    </Div>
  )
}

export default Balanse