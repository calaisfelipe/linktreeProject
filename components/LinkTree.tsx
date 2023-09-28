import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import profilePhoto from "@/public/img/ProfileFoto.jpg";
import StyledLink from "./StyledLink";
import { links } from "@/data/links";
import { motion } from "framer-motion";

const LinkTree = () => {
  return (
    <>
      <div className="mt-4 flex flex-col items-center z-30 w-full">
        <motion.div
         
          initial={{ y: -250 }}
          animate={{ y: -10, transition: { type: "spring", stiffness: 120 } }}
          whileHover={{ rotateY:[0,180,0], animationFillMode:'forwards', transition: { duration: 1.1, } }}
        >
          <Image
            src={profilePhoto}
            height={170}
            width={170}
            className="z-30 rounded-full drop-shadow-lg cursor-pointer"
            alt="Felipe calais foto perfil"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
          className="text-white text-center font-semibold mt-2 text-2xl drop-shadow-md "
        >
          <h1 className="flex flex-row items-center justify-center">
            Felipe Calais{" "}
            <span>
              <MdVerified color="#007bff" className="ml-1" />
            </span>
          </h1>
          <p className="text-gray-300 text-xs font-semibold tracking-widest uppercase">
            Desenvolvedor Web / FRONT-END
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
          className="flex flex-col items-center justify-center gap-y-3 w-full px-4"
        >
          {links.map((link) => (
            <StyledLink key={link.label} href={link.src} label={link.label} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default LinkTree;
