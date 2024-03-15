import React, { useEffect, useState } from "react";
import UserTree from "../components/OrgTree";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import EmplDetails from "../components/EmplDetails";
import { useNavigate } from "react-router-dom";
import "../index.css";

const PageLayout = ({ theme, setTheme, user, setUser }) => {
  const navigate = useNavigate();
  //const [employeeDetails,setEmployeeDetails] = useState();
  const [empData, setEmpData] = useState();
  const { username } = useParams();
  console.log(username);
  const getEmpData = async () => {
    const empData = await axios.get(
      `http://localhost:8080/employees/username/${username}`
    );
    console.log("Emp Data : ", empData);
    return empData;
  };

  useEffect(() => {
    (async () => {
      const data = await getEmpData();
      setEmpData(data);
    })();
  }, [username]);

  if (!sessionStorage.getItem("user")) {
    navigate("/login");
  }

  return (
    <div
      className={`${
        theme === "light" ? "bg-image " : "bg-dark"
      } overflow-hidden`}
    >
      <Navbar theme={theme} setTheme={setTheme} />

      {/* className="wrapper bg-image overflow-hidden" */}
      <div className="flex h-screen">
        <div className="w-1/3 p-4">
          {/* <h2 className="text-xl font-bold mb-4">Details Section</h2> */}
          {empData && (
            <EmplDetails user={user} setUser={setUser} data={empData} />
          )}
        </div>

        <div className="w-2/3 bg-white-300 p-4 ">
          <section className="h-[75vh] overflow-hidden w-2/3  p-4 absolute top-[14rem] left-[35rem] bg-white rounded-2xl dark:bg-[#2e2e2d]">
            <div className="overflow-hidden">
              {empData && (
                <UserTree
                  user={user}
                  setUser={setUser}
                  setEmpData={setEmpData}
                  id={empData.empId}
                  managerid={
                    empData.data.managerDto === null
                      ? empData.empId
                      : empData.data.managerDto.managerId
                  }
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default PageLayout;
