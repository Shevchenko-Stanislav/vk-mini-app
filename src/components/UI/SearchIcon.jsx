import { Icon24Search } from '@vkontakte/icons';
import { IconButton } from '@vkontakte/vkui';
import {ReactComponent as Search} from "../../assets/img/search-md.svg"

let SearchIcon = () => {
  return (
    <IconButton style={{borderRadius: 16, backgroundColor: "#FFF", padding: 12, height: "auto"}}>
      <div style={{width: 24, height: 24}}>
        <Search />
      </div>
    </IconButton>
  )
}

export default SearchIcon