import React, { useState } from "react";
import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;

  border-bottom: 1px solid #eee;
  box-shadow: 2px 2px 10px #eee;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0px 20px;
`;

const MenuIcon = styled(MenuOutlined)`
  font-size: 23px;
  cursor: pointer;

  transition: 0.4s;

  &:hover {
    color: #b2bec3;
  }
`;

const menus = [
  {
    text: "Home",
    link: "/",
    useYn: true,
  },
  {
    text: "Intro",
    link: "/intro",
    useYn: true,
  },
  {
    text: "Project",
    link: "/project",
    useYn: true,
  },
  {
    text: "Contact",
    link: "/contact",
    useYn: true,
  },
  {
    text: "Team",
    link: "/team",
    useYn: true,
  },
  {
    text: "Documents",
    link: "/docs",
    useYn: false,
  },
];

const Meunul = styled.ul`
  width: 100%;
  height: 10px;
  list-style: none;
`;

const MeunLi = styled.li`
  width: 100%;
  margin-bottom: 5px;
  border-bottom: solid 1px #eee;

  cursor: pointer;
  font-weight: bold;
  transition: 0.4s;

  &:hover {
    color: #999;
  }
`;

const CenterDiv = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  ////////// STATE //////////
  const [drawerOpen, setDrawerOpen] = useState(false);

  ////////// HOOKS //////////
  const router = useRouter();

  ////////// EFFECT //////////

  ////////// HANDLER //////////
  const drawerToggle = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, [drawerOpen]);

  const movePage = useCallback((link) => {
    drawerToggle();
    router.push(link);
  }, []);

  return (
    <Wrapper>
      <div>LOGO</div>
      <MenuIcon onClick={drawerToggle} />

      <Drawer visible={drawerOpen} width={`400px`} onClose={drawerToggle}>
        <CenterDiv>LOGO</CenterDiv>
        <Meunul>
          {menus.map((data) => {
            if (!data.useYn) return;
            return (
              <MeunLi onClick={() => movePage(data.link)} key={data.text}>
                {data.text}
              </MeunLi>
            );
          })}
        </Meunul>
      </Drawer>
    </Wrapper>
  );
};

export default Header;
