"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { links } from "./linksList";

const Links = () => {
  const [open, setOpen] = useState(false);
  // temporary
  const session = true;
  const isAdimin = true;

  return (
    <div className={styles.contaier}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdimin && <NavLink item={{ title: "admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "login", path: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>Menu</button>
      {open && <div className={styles.mobileLinks}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>}
    </div>
  );
};

export default Links;
