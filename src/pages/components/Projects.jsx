import React from "react";
import BigCard from "./BigCard";
import "./css/projects.css";

export default function Projects() {
  var data = [
    {
      sno: 1,
      title: "Edu-Bird",
      technology: [
        {
          url: "https://picsum.photos/200/300",
          name: "React",
        },
        {
          url: "https://picsum.photos/200/300",
          name: "TypeScript",
        },
      ],
      content:
        "A e-Learning platform with that is based on expressJS and MongoDB. It has its own authentication system authentication from google and facebook. Create Group discuss the problems and chapter wise lessons",
      date: "18 Apr 2018",
    },
    {
      sno: 2,
      title: "Time React Application",
      technology: [
        {
          url: "https://res.cloudinary.com/dxir7knlo/image/upload/v1639317909/pngaaa.com-2507930_tggs2p.png",
          name: "ReactJS",
        },
        {
          url: "https://picsum.photos/200/300",
          name: "TypeScript",
        },
      ],
      content:
        "This Application is a simple example of how to use react Context. Can be taken as a reference while working at Context Project.",
      date: "18 Apr 2018",
    },
    {
      sno: 3,
      title: "React Components | Storybook",
      technology: [
        {
          url: "https://res.cloudinary.com/dxir7knlo/image/upload/v1639317909/pngaaa.com-2507930_tggs2p.png",
          name: "ReactJS",
        },
        {
          url: "https://picsum.photos/200/300",
          name: "TypeScript",
        },
      ],
      content:
        "StoryBook JS was one of the best things when you are working in a collaboration. Everything is organised and all you get is liberary of components.",
      date: "18 Apr 2018",
    },
  ];
  return (
    <div className="projects">
      {data.map((x) => {
        return (
          <BigCard
            title={x.title}
            technology={x.technology}
            date={x.date}
            content={x.content}
          />
        );
      })}
    </div>
  );
}
