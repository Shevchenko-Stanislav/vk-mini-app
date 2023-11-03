import img from "../../assets/img/man.jpeg"
import { Group, HorizontalCell, HorizontalScroll, Avatar, Header } from "@vkontakte/vkui";

let StayInTouch = () => {
  return (
    <>
    <Header>
      <div className="sectionHeader">
        Будь в курсе
      </div>
      </Header>
      <HorizontalScroll>
        <div style={{display: "flex"}}>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        <HorizontalCell>
          <Avatar size={72} src={img} />
        </HorizontalCell>
        </div>
      </HorizontalScroll>
    </>
  );
};

export default StayInTouch
