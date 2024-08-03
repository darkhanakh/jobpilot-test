import Header from "../Header";

import illustration from "../../assets/illustration.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import FindJobSearch from "../FindJobSearch";
import Card from "../Card";

const cardsData = [
  {
    title: "1,75,324",
    subtitle: "Live Job",
    img: card1,
  },
  {
    title: "97, 324",
    subtitle: "Companies",
    img: card2,
  },
  {
    title: "38,1324",
    subtitle: "Candidates",
    img: card3,
  },
  {
    title: "7, 423",
    subtitle: "New Jobs",
    img: card4,
  },
];

const Hero = () => (
  <div className="bg-gray-100">
    <Header />
    <div className="w-[1400px] mx-auto mt-24">
      <div className="flex justify-between mx-auto">
        <div className="w-[500px] mx-auto ">
          <p className="text-[46px]">
            Find a job that suits your interest & skills.
          </p>
          <p className="text-gray-500 mt-3">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </p>
          <FindJobSearch />
          <p className="text-xs mt-5 text-gray-400">
            Suggestions:{" "}
            <span className="text-gray-500">Designer, Programming, </span>
            <span className="text-blue-500">Digital Marketing, </span>{" "}
            <span className="text-gray-500">Video, Animation</span>
          </p>
        </div>
        <div className="w-[500px] pl-7 mx-auto">
          <img className="w-full" src={illustration} alt="illustration" />
        </div>
      </div>
    </div>
    <div className="mt-16 w-[1300px] flex items-center justify-between mx-auto px-4 space-x-4 pb-48">
      {cardsData.map((card) => (
        <Card img={card.img} title={card.title} subtitle={card.subtitle} />
      ))}
    </div>
  </div>
);

export default Hero;
