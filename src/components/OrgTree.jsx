import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCenteredTree } from "./helper";
import EmplDetails from "./EmplDetails";
import { BiBold } from "react-icons/bi";
import { Bold, Weight } from "lucide-react";

const containerStyles = {
  width: "100%",
  height: "100vh",
  marginBottom: "20px",
  //background: "white",
  borderRadius: "30px",
  cursor: "pointer",
  overflow: "scroll",
};

const buttonStyle = {
  position: "relative",
  justifyContent: "center",
  bottom: "0px",
  width: "250px",
  height: "210px",
  paddingTop: "16px",
  background: "rgb(250,82,82)",
  borderRadius: "50px",
  color: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const nameStyle = {
  fontSize: "20px",
};

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
  handleNodeClick,
  handleDownload,
  handleDownNodeClick,
  handleUpNodeClick,
  id,
  managerIdForUpButton,
  toggleUpBottun,
}) => (
  <>
    <g>
      <foreignObject {...foreignObjectProps}>
        {console.log("managerId in forienObject: " + managerIdForUpButton)}
        {console.log("This is ndoedatum", nodeDatum)}
        {nodeDatum.attributes.managerId !== null &&
          nodeDatum.attributes.id === managerIdForUpButton &&
          toggleUpBottun && (
            <div style={{ textAlign: "center", marginTop: 1 }}>
              <button
                style={{
                  ...buttonStyle,
                  width: "5%",
                  height: "5%",
                  fontSize: "24px",
                  lineHeight: "inherit",
                  padding: 0,
                  //backgroundColor: "#28292D",
                  marginLeft: "113px",
                }}
                onClick={(event) =>
                  handleUpNodeClick(event, nodeDatum, toggleNode)
                }
              >
                {nodeDatum.attributes.id === 1 ? "" : "^"}
              </button>
            </div>
          )}
        <button className="relative" style={buttonStyle}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              onClick={(event) => handleNodeClick(nodeDatum)}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50px",
                overflow: "hidden",
                marginBottom: "10px",
                background: "white",
              }}
            >
              <img
                src={nodeDatum.attributes.img}
                alt="profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className=" flex items-center gap-5 ">
              <div className="">
                <div style={nameStyle}>
                  {nodeDatum.name}{" "}
                  {id === nodeDatum.attributes.id ? "(ME)" : ""}
                </div>
                {/* <div>Designation: {nodeDatum.attributes.designation}</div> */}
                {/* <div>Level: {nodeDatum.attributes.level}</div> */}
                <div>Id: {nodeDatum.attributes.id}</div>
              </div>
              <div
                className="flex justify-between absolute bottom-6 right-6 "
                onClick={(event) => handleDownload(nodeDatum)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-file-down"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M12 18v-6" />
                  <path d="m9 15 3 3 3-3" />
                </svg>
              </div>
            </div>
          </div>
        </button>
        {nodeDatum.attributes.reportees !== 0 && (
          <div style={{ textAlign: "center", marginTop: 1 }}>
            <button
              style={{
                ...buttonStyle,
                width: "25px",
                height: "5%",
                fontSize: "24px",
                lineHeight: "inherit",
                padding: 0,
                marginLeft: "113px",
                justifyContent: "center",
              }}
              onClick={(event) =>
                handleDownNodeClick(event, nodeDatum, toggleNode)
              }
            >
              {nodeDatum.__rd3t.collapsed ||
              nodeDatum.attributes.id === 5 ||
              nodeDatum.attributes.id === 7 ||
              nodeDatum.attributes.id === 8 ||
              nodeDatum.attributes.id === 12 ||
              nodeDatum.attributes.id === 15 ||
              nodeDatum.attributes.id === 16 ||
              nodeDatum.attributes.id === 17 ||
              nodeDatum.attributes.id === 18 ||
              nodeDatum.attributes.id === 19
                ? ""
                : "v"}
            </button>
          </div>
        )}
      </foreignObject>
    </g>
  </>
);

const UserTree = ({ user, setUser, id, managerid }) => {
  console.log("Inside the Org tree", user);
  const navigate = useNavigate();
  const [myTreeData, setMyTreeData] = useState(null);
  const [toggleUpBottun, settoggleUpBottun] = useState(true);
  const [managerIdForUpButton, setmanagerIdForUpButton] = useState(managerid);
  const [dimensions, translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 300, y: 320 };
  const foreignObjectProps = {
    width: nodeSize.x,
    y: -100,
    height: nodeSize.y,
    x: -120,
  };

  const handleNodeClick = async (nodeDatum) => {
    navigate(`/user/${nodeDatum.attributes.username}`);
    console.log("Inside the handle node click", nodeDatum.attributes.username);
  };

  const handleDownload = async (nodeDatum) => {
    console.log("Nodedatum while csv download", nodeDatum);
    try {
      const { data } = await axios.get(
        `http://localhost:8080/byManager/${nodeDatum.attributes.id}`
      );
      downloadCSV(data, nodeDatum.attributes.username);
    } catch (e) {
      alert("no reportee");
    }
  };

  function convertArrayOfObjectsToCSV(data) {
    const header = Object.keys(data[0]).filter((key) =>
      [
        "empId",
        "name",
        "dob",
        "desgination",
        "email",
        "phoneNumber",
        "slackUrl",
      ].includes(key)
    );
    const csv = [
      header.join(","),
      ...data.map((row) =>
        header.map((fieldName) => JSON.stringify(row[fieldName])).join(",")
      ),
    ].join("\n");
    return csv;
  }

  function downloadCSV(data, filename) {
    const csv = convertArrayOfObjectsToCSV(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleDownNodeClick = async (e, nodeDatum, toggleNode) => {
    console.log("Reached down node click");
    console.log(nodeDatum);
    if (nodeDatum !== undefined && nodeDatum.attributes !== undefined) {
      const { id } = nodeDatum.attributes;
      console.log(id);
      console.log("id is", id);
      try {
        const reportees = await axios.get(
          `http://localhost:8080/byManager/${id}`
        );
        let reporteesList = reportees.data;
        console.log("Reporties List", reporteesList);
        for (let i = 0; i < reporteesList.length; i++) {
          const element = reporteesList[i];
          if (element === null) continue;
          const node = {
            name: element?.name,
            attributes: {
              id: element?.empId,
              reportees: reporteesList.length,
              managerId: element?.managerDto.managerId,
              img: element?.personalPhotoLink,
              username: element?.username,
            },
            children: [],
          };
          setMyTreeData((prevData) => {
            return bfsdownwards(id, prevData, node);
          });
        }
      } catch (error) {
        //essage: error.message;
      }
    }
    toggleNode();
  };

  const handleUpNodeClick = async (e, nodeDatum, toggleNode) => {
    console.log("Reached Up node click");

    if (nodeDatum !== undefined && nodeDatum.attributes !== undefined) {
      const { id } = nodeDatum.attributes;
      if (id !== undefined) {
        const { data } = await axios.get(
          `http://localhost:8080/employees/id/${id}`
        );
        if (data.managerDto !== null) {
          const managerId = data.managerDto.managerId;
          console.log("Managar id is here : ", managerId);
          const managerData = await axios.get(
            `http://localhost:8080/manager/${managerId}`
          );
          console.log("manager node detail start :");
          const node = {
            name: managerData?.data.managerName,
            attributes: {
              id: managerData.data?.managerId,
              reportees: 1,
              managerId: managerId,
              img: data.personalPhotoLink,
              username: data.username,
            },
            children: [],
          };
          setMyTreeData((prevData) => {
            return bfsUpwards(id, prevData, node);
          });
          setMyTreeData(node);
          console.log(myTreeData);
          setmanagerIdForUpButton(managerId);
        }
      }
    }
    settoggleUpBottun(false);
    toggleNode();
    settoggleUpBottun(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("ID SHOWING HERE", managerid);
      if (managerid === undefined) {
        managerid = 1;
      }
      console.log("ID SHOWING HERE", managerid);
      const { data } = await axios.get(
        `http://localhost:8080/manager/${managerid}`
      );
      console.log("Data", data);
      const reportees = await axios.get(
        `http://localhost:8080/byManager/${managerid}`
      );
      console.log("Reporties", reportees);
      let reporteesList = reportees.data;
      const children = [];
      for (let i = 0; i < reporteesList.length; i++) {
        const element = reporteesList[i];
        console.log("Elements : ", element);
        if (element === null) continue;
        const childData = {
          name: element.name,
          attributes: {
            id: element.empId,
            reportees: reporteesList.length,
            managerId: element?.managerDto.managerId,
            img: element?.personalPhotoLink,
            username: element?.username,
          },
          children: [],
        };
        children.push(childData);
      }
      console.log(data);
      const manData = await axios.get(
        `http://localhost:8080/employees/id/${data.managerId}`
      );
      console.log("Manager Data : ", manData);
      const newData = {
        name: data.managerName,
        attributes: {
          id: data.managerId,
          reportees: reporteesList.length,
          managerId:
            manData.data.managerDto === null
              ? 1
              : manData.data.managerDto.managerId,
          img: manData.data.personalPhotoLink,
          username: manData.data.username,
        },
        children: children,
      };
      setMyTreeData(newData);
    };
    fetchData();
  }, []);

  function bfsdownwards(id, tree, node) {
    const queue = [];
    queue.unshift(tree);
    while (queue.length > 0) {
      const currNode = queue.pop();
      if (currNode.attributes?.id === id) {
        if (
          !currNode.children.some(
            (child) => child.attributes.id === node.attributes.id
          )
        ) {
          currNode.children.push(node);
          return { ...tree };
        }
      }
      const len = currNode.children.length;
      for (let i = 0; i < len; i++) {
        queue.unshift(currNode.children[i]);
      }
    }
    return tree;
  }

  function bfsUpwards(id, tree, node) {
    const queue = [];
    queue.unshift(tree);
    while (queue.length > 0) {
      const currNode = queue.pop();
      if (currNode.attributes?.id === id) {
        node.children.push(currNode);
        return { ...tree };
      }
      const len = currNode.children.length;
      for (let i = 0; i < len; i++) {
        queue.unshift(currNode.children[i]);
      }
    }
    return tree;
  }

  return (
    <div className="App">
      <div id="treeWrapper" style={containerStyles} ref={containerRef}>
        {myTreeData && (
          <Tree
            data={myTreeData}
            pathFunc="curve"
            enableLegacyTransitions={true}
            separation={{ siblings: 1, nonSiblings: 1 }}
            orientation="vertical"
            translate={translate}
            dimensions={dimensions}
            nodeSize={nodeSize}
            // pathClassFunc={pathClassFunc || defaultPathClassFunc}
            centeringTransitionDuration={200}
            allowForeignObjects
            renderCustomNodeElement={(rd3tProps) =>
              renderForeignObjectNode({
                ...rd3tProps,
                foreignObjectProps,
                handleNodeClick,
                handleDownNodeClick,
                handleDownload,
                id,
                handleUpNodeClick,
                managerIdForUpButton,
                toggleUpBottun,
              })
            }
          />
        )}
      </div>
    </div>
  );
};

export default UserTree;
