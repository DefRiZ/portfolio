import React from "react";
import { projects } from "../../projectArray/arrayProject";
import { projectElement } from "../../types";
import ProjectItem from "../ProjectItem/ProjectItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./SliderItem.scss";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "0px",
};

const SliderItem = () => {
  return (
    <Slider {...settings}>
      {projects.map((project: projectElement) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </Slider>
  );
};

export default SliderItem;
