import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import VEER from '../public/veer.jpg'
import React from "react";
import Link from "next/link";

type Props = {};

const AvatarDropdown = (props: Props) => {
  return (
    <Menu>
      <MenuButton backgroundColor={'transparent'}>
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={VEER.src}
          alt="Bordered avatar"
        />
      </MenuButton>
      <MenuList>
        <MenuItem><Link href="/profile/123">Dashboard</Link></MenuItem>
        <MenuItem onClick={() => alert("Logged out!")} color="red.500">Log out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarDropdown;
