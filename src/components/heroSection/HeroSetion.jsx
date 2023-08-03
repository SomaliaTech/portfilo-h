import "./heroSection.scss";

function HeroSetion() {
  return (
    <div className="herosection">
      <div className="left">
    <div className="bg"></div>
    <img src="/man.png" alt="" className="igm" />
      </div>
      <div className="right">
        <div className="rightWrapper">
          <h2 className="greating">Hello 👋, My Name is </h2>
          <h1 className="name">Hussein Kuneen</h1>
          <div className="title">
            <div className="title-wrapper">
              <div className="item-wrapper">Ui/UX</div>
              <div className="item-wrapper">Web Develpement</div>
              <div className="item-wrapper">Full Stack Developper</div>
              <div className="item-wrapper">Mobile Ios and Android</div>
              <div className="item-wrapper">Mobile Ios and Android</div>
            </div>
          </div>
          <div className="des">
            <p>
            I'm Full Stack Developer With extensive experience for over 2 years, My expertise is to create website ,mobiles and  design and more...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSetion;
