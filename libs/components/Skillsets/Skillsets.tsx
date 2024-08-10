import { colors } from "@/libs/theme/colors";
import { Text } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { DiMongodb } from "react-icons/di";
import {
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJsonwebtokens,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";
import InnerContentWrapper from "../InnerContentWrapper/InnerContentWrapper";
import OuterContentWrapper from "../OuterContentWrapper/OuterContentWrapper";
const Skillsets = () => {
  const animation = { duration: 15000, easing: (t: any) => t };
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",

      drag: true,
      created(s) {
        s.moveToIdx(13, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      slides: {
        perView: 10,
        spacing: 50,
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <OuterContentWrapper
      height="417px"
      bgImage={"/101-slide-right.png"}
      bgColor={colors.background.primary}
    >
      <InnerContentWrapper
        display={"flex"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        maxW={"unset"}
      >
        <Text size="header-2" mb="64px">
          My Current Skillset
        </Text>
        <div
          ref={sliderRef}
          style={{
            display: "flex",
            alignItems: "center",
            width: "full",
          }}
          dir="row"
          className="keen-slider"
        >
          <SiJavascript
            className="keen-slider__slide"
            style={{ color: "#EED81C", fontSize: "5rem" }}
          />
          <FaHtml5
            className="keen-slider__slide"
            style={{ color: "#DF4716", fontSize: "5rem" }}
          />
          <FaCss3
            className="keen-slider__slide"
            style={{ color: "#2194F0", fontSize: "5rem" }}
          />
          <FaSass
            className="keen-slider__slide"
            style={{ color: "#C96195", fontSize: "5rem" }}
          />

          <FaReact
            className="keen-slider__slide"
            style={{ color: "#50BBD7", fontSize: "5rem" }}
          />

          <SiRedux
            className="keen-slider__slide"
            style={{ color: "#7348B7", fontSize: "5rem" }}
          />

          <DiMongodb
            className="keen-slider__slide"
            style={{ color: "#87D144", fontSize: "5rem" }}
          />

          <FaNodeJs
            className="keen-slider__slide"
            style={{ color: "#88C249", fontSize: "8rem" }}
          />

          <FaGit
            className="keen-slider__slide"
            style={{ color: "#E94F30", fontSize: "8rem" }}
          />

          <FaGithub
            className="keen-slider__slide"
            style={{ color: "white", fontSize: "8rem" }}
          />

          <SiJsonwebtokens
            className="keen-slider__slide"
            style={{ color: "#CE38F6", fontSize: "8rem" }}
          />

          <SiSocketdotio
            className="keen-slider__slide"
            style={{ color: "white", fontSize: "8rem" }}
          />
        </div>
      </InnerContentWrapper>
    </OuterContentWrapper>
  );
};

export default Skillsets;
