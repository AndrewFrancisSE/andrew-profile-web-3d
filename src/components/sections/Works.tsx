import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { link } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="bg-tertiary w-full rounded-2xl">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-fit rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={link}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  // @ts-ignore
  return (
      <>
        <Header useMotion={true} {...config.sections.works} />

        <div className="flex w-full">
          <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
          >
            {config.sections.works.content}
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
        <motion.div className=' flex justify-center w-full mt-20 cursor-pointer' variants={fadeIn("", "", 0.1, 1.5)}>
          <a href="https://github.com/AndrewFrancisSE?tab=repositories" target='blank'
             className='hover:scale-110 duration-500'>
            <div className='green-pink-gradient p-[1px] rounded-xl'>
              <div
                  className="bg-tertiary px-8 py-4 rounded-xl text-[22px] tracking-wider uppercase hover:bg-white hover:text-tertiary">
                More Projects ...
              </div>
            </div>
          </a>
        </motion.div>
      </>
  );
};

export default SectionWrapper(Works, "");
