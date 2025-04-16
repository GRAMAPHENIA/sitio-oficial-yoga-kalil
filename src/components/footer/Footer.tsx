import React from "react";

const Footer = () => {
  return (
    <footer>
      <figure>HIPERSTICIÓN</figure>
      <div className="border-b border-zinc-00/50"></div>
      <nav>
        <ul className="flex gap-8 text-zinc-500">
          <li className=" hover:text-zinc-700">
            <a href="./">Concepto</a>
          </li>
          <li className=" hover:text-zinc-700">
            <a href="./">Historia</a>
          </li>
          <li className=" hover:text-zinc-700">
            <a href="./">Futuro</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
