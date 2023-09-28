import React from "react";
import Link from "next/link";

type StyledLinkProps = {
  href: string;
  label: string;
};

const StyledLink = ({ href, label }: StyledLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="border md:py-2 py-3 px-10 text-white rounded-full w-full mt-2 text-center text-xl cursor-pointer md:w-80 transition-all hover:scale-105 hover:border-2"
    >
      {label}
    </Link>
  );
};

export default StyledLink;
