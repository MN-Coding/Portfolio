"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>C++</li>
        <li>SQL</li>
        <li>Java</li>
        <li>R</li>
        <li>Bash</li>
        <li>HCL (Terraform)</li>
        <li>C#</li>
      </ul>
    ),
  },
  {
    title: "Tools & Frameworks",
    id: "tools",
    content: (
      <ul className="list-disc pl-2">
        <li>Azure</li>
        <li>AWS</li>
        <li>Terraform</li>
        <li>Ansible</li>
        <li>React</li>
        <li>React Native</li>
        <li>Node.js</li>
        <li>Power BI</li>
        <li>Bootstrap</li>
        <li>Firebase</li>
        <li>Jenkins</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Azure Fundamentals</li>
        <li>Microsoft Azure AI Fundamentals</li>
        <li>Modern JavaScript</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.avif" width={500} height={500} style={{ borderRadius: '10px' }}/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hey there! 👋 <br/>I'm Monir, a 4th year Computer Science student at the University of Waterloo
            with a passion for creating interactive and responsive software. I have experience working on web-based, 
            desktop and mobile applications through my previous internships and academic career. 
            I am always looking to expand my knowledge and skill set.  <br/> Please feel free to reach out to chat!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              {" "}
              Tools & Framworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
