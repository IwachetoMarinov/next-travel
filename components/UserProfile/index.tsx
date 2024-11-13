"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useAuthentication from "@/hooks/useAuthentication";
import CustomLink from "@/components/ui/Link";
import Dropdown from "@/components/ui/Dropdown";

const UserProfile = () => {
  const { user } = useAuthentication();
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggleDropdown = () => {
    console.log("toggleDropdown");
  };

  return (
    <>
      {user?.email ? (
        <div
          className="cursor-pointer relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src={`/images/user-profile.jpg`}
            alt="Picture of the author"
            width={50}
            height={50}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          {isOpen && (
            <Dropdown>
              <CustomLink href="/profile" title="Профил" type="" />
            </Dropdown>
          )}
        </div>
      ) : (
        <div>
          <CustomLink href="/login" title="Вход" type="" />
        </div>
      )}
    </>
  );
};

export default UserProfile;
