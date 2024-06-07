/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/kb.jpeg";

const imageAltText = "key running";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Social Media Handle",
    description:
      "Here you can find all the links for my social media handle. Looking forward to have a chat with you.",
    url: "sparshbisen.github.io/Social-Media-Handle/",
  },
  {
    title: "Guide for Application for MLSA",
    description:
      "My youtube video for understanding how you are suppose to frame the answer so that the chances of getting selected is more",
    url: "https://www.youtube.com/watch?v=0bLUNELP3JA",
  },
  {
    title: "My Resume Site",
    description:
      "My resume site is still in construction till then you can visit the github repository for understanding the structure of my website",
    url: "https://github.com/SparshBisen/PortfolioWebsite",
  },
  {
    title: "Understand GitHub",
    description:
      "Video for understanding what actually GitHub is used for !!!",
    url: "https://www.youtube.com/watch?v=pBy1zgt0XPc",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
