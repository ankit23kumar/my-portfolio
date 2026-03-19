// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 my-12 border-t border-[#25213b] lg:my-24"
    >
      <div className="absolute top-6 left-[42%] h-[100px] w-[100px] translate-x-1/2 rounded-full bg-violet-100 opacity-20 blur-3xl"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">
            Skills
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="my-12 w-full">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover
          pauseOnClick
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const image = skillsImage(skill);

            return (
              <div
                key={id}
                className="group relative m-3 flex h-fit min-w-fit w-42 cursor-pointer flex-col items-center justify-center rounded-lg transition-all duration-500 hover:scale-[1.15] sm:m-5"
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] transition-all duration-500 group-hover:border-violet-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="flex h-10 w-10 items-center justify-center">
                      {image?.src ? (
                        <Image
                          src={image.src}
                          alt={skill}
                          width={40}
                          height={40}
                          className="rounded-lg"
                        />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1b2440] text-sm font-semibold text-white">
                          {skill.charAt(0)}
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-white sm:text-lg">{skill}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;