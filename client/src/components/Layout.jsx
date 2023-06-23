import React from "react";

import { NavSidebar } from "./NavSidebar";
import BodyWrapper from "./BodyWrapper";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export const DashboardLayout = ({ children, data, setMainData }) => {
   
   
  return (
    <BodyWrapper>
      <div className="flex  bg-blue-200">
      <div className="absolute right-0">


</div>
        <NavSidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
              <Navbar bg="primary" variant="dark">
          <Container>
              <Navbar.Brand>Data Virtualization Dashboard</Navbar.Brand>
          </Container>
      </Navbar>
  
                {children}
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
