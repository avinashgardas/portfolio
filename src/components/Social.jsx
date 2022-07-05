import React from "react";

const SocialShare = [
  {
    iconName: "file",
    name: "Resume",
    link: "https://drive.google.com/file/d/15iq4FBHoJXrme3DN1zbdVf6ewJ7xw5d8/view?usp=sharing",
  },
  {
    iconName: "github",
    name: "Github",
    link: "https://github.com/avinashgardas",
  },
  {
    iconName: "linkedin",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/avinash-gardas/",
  },
  {
    iconName: "mail",
    name: "Mail",
    link: "mailto:gard0216@algonquinlive.com",
  },
  // { iconName: "twitter", link: "https://twitter.com/" },
  // {
  //   iconName: "instagram",
  //   name: "Instagram",
  //   link: "https://www.instagram.com/",
  // },
  // { iconName: "dribbble", link: "https://dribbble.com/" },
  // {
  //   iconName: "tik-tok",
  //   link: "https://www.tiktok.com/",
  // },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
              <span className="title">{val?.name}</span>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
