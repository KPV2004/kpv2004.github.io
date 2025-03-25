"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Menu {
  title: string;
  icon: string;
  data: Data[];
}

interface Data {
  title: string;
  image: string;
  location: string;
  timeLine: string;
  detial: string[];
  link: string
}

export default function Home() {
  const [experienceData, setexperienceData] = useState<Data[]>([]);

  const [educationData, setEducationData] = useState<Data[]>([
    {
      title: "Bachelor of Engineering Computer Engineering",
      image: "https://www.src.ku.ac.th/th/info/logo/Original2.png",
      location: "Kasetsart University Sriracha Campus",
      timeLine: "2022 - Present",
      detial: [
        "Gained strong programming skills in C++, Python, and Java.",
        "Developed a web development project focusing on responsive design and full-stack development",
        "Studied software development and computer systems design.",
        "Current GPA: 3.35/4.0",
      ],
      link:"",
    },
    {
      title: "High School in Mathematics-Science",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%9E%E0%B8%99%E0%B8%A1%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1%22%E0%B8%9E%E0%B8%99%E0%B8%A1%E0%B8%AD%E0%B8%94%E0%B8%B8%E0%B8%A5%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%22.png/960px-%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%9E%E0%B8%99%E0%B8%A1%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1%22%E0%B8%9E%E0%B8%99%E0%B8%A1%E0%B8%AD%E0%B8%94%E0%B8%B8%E0%B8%A5%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%22.png",
      location: "Phanomsarakham “Phanom Adun Witthaya” School",
      timeLine: "2019 - 2021",
      detial: [
        "GPAX: 3.55/4.0",
      ],
      link:"",
    },
  ]);
  // ku-schedule.png

  const [projectData, setProjectData] = useState<Data[]>([
    {
      title:"KU-Schedule",
      image:"/ku-schedule.png",
      location:"",
      timeLine:"",
      detial:[
        "A website designed to help organize schedules, providing an overview of what courses need to be taken. It allows you to save the schedule as an image for future reference."
      ],
      link:"https://ku-schedule.vercel.app/",
    },
    {
      title:"CyberArena",
      image:"/cyberarena.png",
      location:"",
      timeLine:"",
      detial:[
        "It's a card game about CyberSecurity designed for training on various real-world cyber threats. using NextJS",
      ],
      link:"https://cyberarena.vercel.app/",
    },
    {
      title:"CyberGeekClub",
      image:"/cybergeekclub.png",
      location:"",
      timeLine:"",
      detial:[
        "The CyberGeekClub website is a platform for the club at Kasetsart University Sriracha Campus to manage member registrations and share announcements. using NextJS , Prisma(ORM)",
      ],
      link:"https://cybergeekclub.vercel.app/",
    }
    // cybergeekclub.png
  ]);
  const [skillData, setSkillData] = useState<Data[]>([
    {
      title:"C++",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
      location:"",
      timeLine:"",
      detial:[
        "I have understand in this language"
      ],
      link:"",
    }
  ]);

  const [menuList, setMenuList] = useState<Menu[]>([
    { title: "Education", icon: "mdi:education-outline", data: educationData },
    { title: "Experience", icon: "flowbite:award-solid", data: experienceData },
    { title: "Project", icon: "ic:sharp-work", data: projectData },
    { title: "Skill", icon: "gridicons:code", data: skillData },
  ]);
  // const [menuData, setMenuData] = useState<

  const [selectMenu, setSelectMenu] = useState<Menu>(menuList[0]);
  return (
    <div>
      <div className="bg-gray-200 w-full sm:h-dvh max-sm:h-full flex justify-center items-center">
        <div className="bg-white w-[95%] h-[95%] grid sm:grid-cols-6 shadow-xl max-sm:grid-rows-6">
          <div className="sm:col-span-2 grid grid-rows-5 px-[3%] max-sm:row-span-2 ">
            <div className="row-span-2 my-[5%] flex flex-col justify-center items-center gap-[3%] ">
              <div>
                <Image
                  src="/profile.jpeg"
                  width={150}
                  height={100}
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col justify-center items-center text-3xl font-bold text-[#608abf]">
                <h1 className="">Pannet</h1>
                <h1 className="">Vanicharkorl</h1>
              </div>
              <h1 className="text-xl text-gray-500">Software Enginner</h1>
            </div>
            <div className="row-span-1 flex flex-col justify-around">
              <div className="flex gap-5 border-b-2 pb-[2%] border-[#608abf] font-semibold">
                <Icon
                  icon="ic:baseline-local-phone"
                  style={{ fontSize: "24px", color: "black" }}
                />
                <h1 className="text-black">Contact</h1>
              </div>
              <div className="flex gap-5">
                <Icon
                  icon="ic:twotone-phone-enabled"
                  style={{ fontSize: "24px", color: "#608abf" }}
                />
                <h1 className="text-gray-500">081-142-5444</h1>
              </div>
              <div className="flex gap-5">
                <Icon
                  icon="ic:baseline-alternate-email"
                  style={{ fontSize: "24px", color: "#608abf" }}
                />
                <h1 className="text-gray-500">pannetvanicharkorl@gmail.com</h1>
              </div>
              <div className="flex gap-5">
                <Icon
                  icon="ic:outline-location-on"
                  style={{ fontSize: "24px", color: "#608abf" }}
                />
                <h1 className="text-gray-500">
                  863 moo 2 Khao Hin Son, Phanom Sarakham, Chachoengsao 24120
                </h1>
              </div>
            </div>
            <div className="row-span-1 flex flex-col justify-around">
              <div className="flex gap-5 border-b-2 pb-[2%] border-[#608abf] font-semibold">
                <Icon
                  icon="mdi:account"
                  style={{ fontSize: "24px", color: "black" }}
                />
                <h1 className="text-black">About Me</h1>
              </div>
              <h1 className="text-gray-500">
                Currently a third-year Computer Engineering student at Kasetsart
                University Sriracha Campus, with skills in C++, Python, and
                Java, along with experience in web development and cybersecurity
                competitions. Interested in learning new technologies and aiming
                to become a software developer to create effective solutions.
              </h1>
            </div>
            <div className="row-span-1  flex justify-center items-center gap-[5%] font-semibold">
              <Link href="/Resume.pdf" target="_blank" rel="Resume">
                <button className="px-[30px] py-[20px] bg-green-400 text-white font-semibold rounded-md hover:bg-green-500 transition">
                  Download Resume
                </button>
              </Link>
              <Link href="#"  rel="CV">
                <button className="px-[30px] py-[20px] bg-[#608abf] text-white font-semibold rounded-md hover:bg-[#507aaf] transition">
                  Download CV
                </button>
              </Link>
            </div>
          </div>
          <div className="sm:col-span-4 max-sm:row-span-4 grid sm:grid-cols-11 max-sm:grid-rows-21 ">
            <div className="bg-[#608abf] sm:col-span-1 max-sm:row-span-1 flex sm:flex-col max-sm:flex-row justify-around  text-white">
              {menuList.map((element) => (
                <button
                  className={`w-full h-full ${
                    element.title == selectMenu.title
                      ? "sm:border-r-6 max-sm:border-b-6"
                      : ""
                  } border-gray-500`}
                  onClick={() => {
                    setSelectMenu(element);
                  }}
                >
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Icon icon={element.icon} style={{ fontSize: "32px" }} />
                    <h1 className="max-sm:hidden">{element.title}</h1>
                  </div>
                </button>
              ))}
            </div>
            <div className="sm:col-span-10 max-sm:row-span-20 py-10 px-10 sm:h-[100%] grid grid-rows-11 ">
              <div className="row-span-1 flex text-gray-600 pb-5 border-b-2 border-[#608abf] text-3xl flex items-center gap-4">
                <Icon icon={selectMenu.icon} style={{ fontSize: "36px" }} />
                <h1>{selectMenu.title}</h1>
                
              </div>
              {/* <div className="row-span-10 py-10 flex flex-col gap-10 h-[100%] overflow-y-scroll "> */}
              <div className="row-span-10 py-10 flex flex-col gap-10 h-[100%] sm:max-h-[720px] overflow-y-auto">
                {selectMenu.data.map((element) => (
                  <div className="flex max-sm:flex-col gap-5 items-center px-5">
                    <img src={element.image} width="150" height="150"></img>
                    <div className="text-gray-800 w-full">
                      <div className="flex justify-between">
                        <h1 className="font-bold text-xl">{element.title}</h1>
                        {element.link && 
                          <Link href={element.link} target="_blank">
                            <Icon icon="mynaui:external-link-solid" style={{ fontSize: "24px" }} /> 
                          </Link>
                        }
                      </div>

                      {(element.location || element.timeLine) &&
                        <div className="flex justify-between">
                          <h2>{element.location}</h2>
                          <h2>{element.timeLine}</h2>
                        </div>
                      }
                      <ul>
                        {element.detial.map((member, index) => (
                          <li key={index}>{" ๐ " + member}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
