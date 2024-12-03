import React, { useEffect, useState } from "react";
import Sidebar from "./section/SideBar";
import Footer from "./section/Footer";
import Header from "./section/Header";
import { useParams, useLocation } from "react-router-dom";
import { getOne } from "../../api/workspaceApi";
const initData = {
  id: "",
  name: "Mingle Space에 오신것을 환영합니다.",
  wsdesc: "",
  count: "",
};
const BasicLayout = ({ children }) => {
  console.log("베이직 레이아웃");
  console.log(children);
  const { workspaceId } = useParams();
  console.log("layout workspaceID : " + workspaceId);
  const [workspaceData, setWorkspaceData] = useState({ ...initData });

  useEffect(() => {
    console.log("basiclayout data.name : " + workspaceData.name);
    if (workspaceId) {
      getOne(workspaceId).then((workspaceServerData) => {
        console.log("BasicLayout workspaceData: " + workspaceServerData);
        setWorkspaceData(workspaceData);
        console.log("BasicLayout data: " + workspaceData);
      });
    }
  }, children);
  return (
    <>
      <Header workspaceData={workspaceData} />
      <div className="midcontainer">
        <Sidebar addmenu={workspaceId} />
        <div className="main_container">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default BasicLayout;
