import React from "react";
import NewServiceRequest from "../../components/HomePage/NewServiceRequest";
import MySummary from "../../components/HomePage/MySummary";
import Announcements from "../../components/HomePage/Announcements";
import { Box, Item } from "devextreme-react/box";

function Dashboard() {
  return (
    <Box direction="col" width="100%" height="200vh">
      {/* Top Section: New Service Request */}
      <Item  ratio={1}>
        <NewServiceRequest />
      </Item>

      {/* Bottom Section: My Summary and Announcements */}
      <Item  ratio={2}>
        <Box direction="row" width="100%" height="100%">
          <Item ratio={1}>
            <MySummary />
          </Item>
          <Item ratio={1}>
            <Announcements />
          </Item>
        </Box>
      </Item>
    </Box>
  );
};

export default Dashboard;
