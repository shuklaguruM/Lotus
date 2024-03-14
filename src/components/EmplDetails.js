import { upload } from "@testing-library/user-event/dist/upload";
import { Download } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const EmplDetails = ({ data }) => {
  const cloudinary_url =
    "https://res.cloudinary.com/djt3bitue/image/upload/v1710347863/t4tgknvj3tbuslhmuxff.png";
  console.log("Logged inside empl details id is ", data);
  const [name, setName] = useState(data.data.name);
  const [designation, setDesignation] = useState(data.data.designation);
  const [dob, setDob] = useState(data.data.dob);
  const [office_photo_url, setOfficePhotoUrl] = useState(
    data.data.officePhotoLink
  );
  const [personal_photo_url, setPersonalPhotoUrl] = useState(
    data.data.personalPhotoLink
  );
  const [id, setId] = useState(data.data.empId);
  const [email, setEmail] = useState(data.data.email);
  const [phone, setPhone] = useState(data.data.phoneNumber);
  const [manager, setManager] = useState(
    data.data.managerDto === null ? "" : data.data.managerDto.managerName
  );
  const [img, setImg] = useState(data.data.officePhotoLink);
  const [isAlternate, setIsAlternate] = useState(false);
  const handleImageClick = () => {
    setIsAlternate(!isAlternate);
  };

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = cloudinary_url;
    anchor.setAttribute("download", "offer_letter");
    anchor.click();
  };

  const handleImageChange = (event) => {
    setImg(event.target.files[0]);
  };

  const uploadImage = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      console.log(data.data.empId);
      const response = await axios.post(
        `http://localhost:8080/upload/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.reload();
      console.log("Image uploaded successfully:", response);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div className="">
        <div className=" bg-indigo-500 rounded-3xl  ">
          <div className=" absolute left-[11.5rem] top-[3rem] w-45 h-45 rounded-2xl mx-auto z-[99999] bg-[pink] )] bg-cover w-48 h-48">
            <img
              src={isAlternate ? office_photo_url : personal_photo_url}
              onClick={handleImageClick}
            ></img>
          </div>
        </div>
        <div className="absolute top-[9rem] left-14 pt-[6rem] w-1/4 mx-auto my-3 bg-white dark:bg-[#111111] rounded-2xl shadow-md p-5 z-1">
          <h2 className="text-center text-2xl font-semibold mt-3 dark:text-white">
            {name}
          </h2>
          <div className="flex items-center justify-center mx-auto mt-[0.5rem]">
            <div className="text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1 rounded-lg dark:text-[#A6A6A6]">
              {designation}
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <a href="/" className="text-blue-500 hover:text-blue-700 mx-3">
              <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877F2]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </a>
            <a href="/" className="text-blue-500 hover:text-blue-700 mx-3">
              <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077B5]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
            <a
              href="https://moneyview.slack.com/team/U06L0TF17HV"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700 mx-3"
            >
              <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#3EB991]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M94.1 315.1c0 25.9-21.2 47.1-47.1 47.1S0 341 0 315.1c0-25.9 21.2-47.1 47.1-47.1h47.1v47.1zm23.7 0c0-25.9 21.2-47.1 47.1-47.1s47.1 21.2 47.1 47.1v117.8c0 25.9-21.2 47.1-47.1 47.1s-47.1-21.2-47.1-47.1V315.1zm47.1-189c-25.9 0-47.1-21.2-47.1-47.1S139 32 164.9 32s47.1 21.2 47.1 47.1v47.1H164.9zm0 23.7c25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1H47.1C21.2 244 0 222.8 0 196.9s21.2-47.1 47.1-47.1H164.9zm189 47.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1h-47.1V196.9zm-23.7 0c0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1V79.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1V196.9zM283.1 385.9c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1v-47.1h47.1zm0-23.7c-25.9 0-47.1-21.2-47.1-47.1 0-25.9 21.2-47.1 47.1-47.1h117.8c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1H283.1z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="p-7 rounded-3xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]  ">
            <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A] ">
              <span className="p-2 rounded-md bg-white text-[#E93B81] shadow-md hover:bg-[#E93B81] hover:text-white dark:bg-black dark:hover:bg-[#E93B81] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-smartphone"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <div className="text-xs text-[#44566C] dark:text-[#A6A6A6] ">
                  Phone
                </div>
                <div className="dark:text-white break-all">
                  <a
                    className="hover:text-[#FA5252] duration-300 transition "
                    href="tel:+91 7033755056"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A] ">
              <span className="p-2 rounded-md bg-white text-[#FD7590] shadow-md hover:bg-[#E93B81] hover:text-white dark:bg-black dark:hover:bg-[#E93B81]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mails"
                >
                  <rect width="16" height="13" x="6" y="4" rx="2" />
                  <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
                  <path d="M2 8v11c0 1.1.9 2 2 2h14" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <div className="text-xs text-[#44566C] dark:text-[#A6A6A6]  ">
                  Email
                </div>
                <div className="dark:text-white break-all">
                  <a
                    className="hover:text-[#FA5252] duration-300 transition"
                    href="mailto:ibthemes21@gmail.com"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
              <span className="p-2 rounded-md bg-white text-[#C17CEB] shadow-md hover:bg-[#E93B81] hover:text-white dark:bg-black dark:hover:bg-[#E93B81]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar-days"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              </span>
              <div className="text-left ml-2.5 ">
                <div className="text-xs text-[#44566C] dark:text-[#A6A6A6]  ">
                  Birthday
                </div>
                <div className="dark:text-white break-all">
                  <div className="">{dob}</div>
                </div>
              </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A] ">
              <span className="p-2 rounded-md bg-white text-[#E93B81] shadow-md hover:bg-[#E93B81] hover:text-white dark:bg-black dark:hover:bg-[#E93B81]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-person-standing"
                >
                  <circle cx="12" cy="5" r="1" />
                  <path d="m9 20 3-6 3 6" />
                  <path d="m6 8 6 2 6-2" />
                  <path d="M12 10v4" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <div className="text-xs text-[#44566C] dark:text-[A6A6A6]">
                  Manager
                </div>
                <div className="dark:text-white break-all">
                  <div className="">{manager}</div>
                </div>
              </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A] ">
              <span className="p-2 rounded-md bg-white text-[#FD7590] shadow-md hover:bg-[#E93B81] hover:text-white dark:bg-black dark:hover:bg-[#E93B81]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users-round"
                >
                  <path d="M18 21a8 8 0 0 0-16 0" />
                  <circle cx="10" cy="8" r="5" />
                  <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <div className="text-xs text-[#44566C] dark:text-[#A6A6A6]  ">
                  Communities
                </div>
                <div className="dark:text-white break-all">
                  <div className="">abc</div>
                </div>
              </div>
            </div>

            <div className="flex py-2.5 undefined ">
              <span className="p-2 rounded-md bg-white text-[#c0ef74] shadow-md hover:bg-[#E93B81] hover:text-white dark:bg-black dark:hover:bg-[#E93B81]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-tags"
                >
                  <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
                  <path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" />
                  <circle cx="6.5" cy="9.5" r=".5" fill="currentColor" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <div className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Tags
                </div>
                <div className="dark:text-white break-all">
                  <div className="">xyz</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto">
            <a
              onClick={handleDownload}
              href={cloudinary_url}
              download="Offer_letter.png"
              className="inline-flex items-center mx-auto bg-gradient-to-r from-[#fa5252] to-[#dd2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
            >
              <Download className="mr-2" />
              Download Offer Letter
            </a>
          </div>
          <div className="flex items-center justify-center mx-auto">
            <label
              className="cursor-pointer inline-flex items-center mx-auto bg-gradient-to-r from-[#fa5252] to-[#dd2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
              htmlFor="profile-pic-img"
            >
              <svg
                className="w-8 h-8 pr-1 pt-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <input
                type="file"
                className="hidden"
                id="profile-pic-img"
                accept="image/png, image/jpeg, image/jpg"
                onChange={uploadImage}
              />
              <span className="mr-2">Upload Your Image</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default EmplDetails;
