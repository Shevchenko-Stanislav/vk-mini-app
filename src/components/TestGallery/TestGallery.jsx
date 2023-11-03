import { Gallery, Div, Header } from "@vkontakte/vkui";

let TestGallery = () => {
  return (
    <Div>
      <Header className="sectionHeader">Слайдер</Header>
      <Gallery bullets="light">
        {new Array(6).fill("value").map((item, index) => {
          return (
            <img key={index}
              src="https://placebear.com/1024/640"
              style={{ display: "block", maxHeight: 380 }}
            />
          );
        })}
      </Gallery>
    </Div>
  );
};

export default TestGallery;
