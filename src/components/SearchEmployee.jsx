import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
//import { getTokenFromLocalStorage } from "../../utility";
//import { debounce } from "../../api/Search";
import { Search, useNavigate } from "react-router-dom";
import { debounce } from "./searchHelper";
import downloadImg from "../components/tag.jpg";
import commImg from "../components/comm.jpeg";
//import { useStateLoad } from "@/customHook/useStateLoad";
const img1 =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const SearchDataType = {
  //   contactNumber: string | null,
  //   dateCreated: string | null,
  //   dateModified: string | null,
  //   designation: string | null,
  //   dob: string | null,
  //   empCode: string | null,
  //   firstName: string | null,
  //   frequency: string | null,
  //   id: string | null,
  //   lastName: string | null,
  //   managerEmail: string | null,
  //   pod: string | null,
  //   profileImageUrl: string | null,
  //   userEmail: string | null,
};

const SearchEmployee = () => {
  const [border, setBorder] = useState(1);
  const [results, setResults] = useState([]);
  // to load the state while refreshing
  //useStateLoad();
  const changeHandler = async (e) => {
    let query = e.target.value;
    if (!query) return;
    try {
      let queryParams = "";
      if (border === 1) queryParams = "name";
      if (border === 2) queryParams = "community";
      if (border === 3) queryParams = "tags";

      console.log("intial debounce: ", query, queryParams);
      // if (border === 4) queryParams = "expertise";
      await debounce(query, queryParams, setResults, 500);

      console.log("Result is animesh ", results);
    } catch (err) {}
  };
  console.log("results actual used: ", results);
  return (
    <div className=" bg-[pink] dark:bg-[#212425]   h-[76.5vh] w-full flex justify-center  bg-circule    ">
      <main className="  w-10/12 sm:w-9/12 lg:w-10/12 bg-glassmorphism text-white rounded-lg   p-1  ">
        {/* search */}
        <form className=" flex items-center s-bg-white p-1 rounded-tl-md rounded-tr-md border-b-slate-500 border-b-2  text-black dark:text-[#A6A6A6] ">
          <CiSearch className=" ml-2 text-2xl " />
          <input
            className=" pl-4 pr-2 py-2 w-full outline-none  s-bg-white bg-transparent "
            type="text"
            onChange={changeHandler}
          />
        </form>
        {/* heading */}
        <div className=" overflow-scroll flex w-full s-bg-white  dark:text-[A6A6A6] ">
          <Category
            name="Name"
            count={5}
            idx={1}
            border={border}
            setBorder={setBorder}
          />
          <Category
            name="Community"
            count={23}
            idx={2}
            border={border}
            setBorder={setBorder}
          />
          <Category
            name="Tags"
            count={2}
            idx={3}
            border={border}
            setBorder={setBorder}
          />
        </div>
        {/* // show search Results */}
        <div className=" transition-all duration-1000 h-fit max-h-[40vh] my-3 overflow-y-auto ">
          <Communities results={results} border={border} />
        </div>
      </main>
    </div>
  );
};
const UserType = {
  //   name: string,
  //   email: string,
  //   img: string,
};

const User = ({ name, email, img, username }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={(e) => {
        navigate(`/user/${username}`);
        window.location.reload();
      }}
      className=" cursor-pointer  p-3 flex gap-3 items-center my-3 "
    >
      <img className=" w-14 h-14 rounded-full object-cover " src={img} alt="" />
      <div>
        <p className="  ">{name}</p>
        <p className=" text-sm text-slate-500 "> {email} </p>
      </div>
    </div>
  );
};

const Community = ({ name, description, img }) => {
  return (
    <div className=" cursor-pointer  p-3 flex gap-3 items-center my-3 ">
      <img className=" w-14 h-14 rounded-full object-cover " src={img} alt="" />
      <div>
        <p className="  ">{name}</p>
        <p className=" text-sm text-slate-500 "> {description} </p>
      </div>
    </div>
  );
};

const Tag = ({ img, name }) => {
  return (
    <div className=" cursor-pointer  p-3 flex gap-3 items-center my-3 ">
      <img className=" w-14 h-14 rounded-full object-cover " src={img} alt="" />
      <div>
        <p className="  ">{name}</p>
      </div>
    </div>
  );
};

const Communities = ({ results, border }) => {
  if (border === 1) {
    {
      return (
        results &&
        results.map((user) => (
          <User
            key={user.empId}
            name={`${user.name}`}
            email={user.email || ""}
            img={user.personalPhotoLink}
            username={user.username}
          />
        ))
      );
    }
  }
  if (border === 2) {
    return (
      results &&
      results.map((result) => {
        return (
          <Community
            name={result.communityName}
            description={result.description}
            img={commImg}
          />
        );
      })
    );
  }

  if (border === 3) {
    return (
      results &&
      results.map((result) => {
        return <Tag name={result.tagName} img={downloadImg} />;
      })
    );
  }
};
// const CategoriesType = {
//   name: string,
//   count: number,
//   idx: number,
//   border: number,
//   setBorder: 10,
// };

const Category = ({ name, count, idx, border, setBorder }) => {
  return (
    <span
      onClick={() => {
        setBorder(idx);
      }}
      className={` m-2  cursor-pointer transition-all  duration-500 flex justify-center items-center text-center w-fit py-1 px-2   ${
        border === idx ? ` bg-white rounded-lg text-black ` : `border-slate-600`
      }   `}
    >
      {name}
    </span>
  );
};
export default SearchEmployee;
