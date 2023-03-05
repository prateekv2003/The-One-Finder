import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import BackAndNext from "./BackAndNext";
import Stepper from "./Stepper";

import ProfileImage from "../../public/Profile.gif";
import { useContext } from "react";
import { AppContext } from "context/AppContext";
import { storage } from "../../firebase";
type Props = {};
const Form2 = ({ handleInputState }: any) => {
  const { context, step, setStep, handleChange } = useContext(AppContext);
  const [selectedFile, setSelectedFile] = useState([]);

  const handleFileInputChange = (event: any) => {
    const files = event.target.files;
    if (files.length <= 0) return;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const file = e.target.result;
        const fileName = e.target.fileName;
        setSelectedFile([...selectedFile, file]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitFile = () => {
    // TODO: Handle file upload and processing using the selected file
    selectedFile.map((image) => {
      const fileName = "omkar";
      const storageRef = ref(storage, `/images/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, image, {
        contentType: "image/*",
      });
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const uploaded = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("uploaded", snapshot);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            handleInputState(name, url);
          });
        }
      );
    });
    console.log("selectedFile", selectedFile);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto flex flex-wrap items-center">
        <div className="md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <img
            src={ProfileImage.src}
            alt="form"
            className="aspect-square rounded-md m-8"
          />
        </div>
        <div className="md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <>
            <Stepper />
          </>
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            About You!
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="file"
              id="images"
              name="images"
              className="w-full bg-white rounded border border-gray-300 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleFileInputChange}
            />
            <button
              onClick={handleSubmitFile}
              className="text-white bg-fuchsia-500 border-0 py-2 px-8 focus:outline-none hover:bg-fuchsia-600 rounded text-lg"
            >
              Upload
            </button>
          </div>
          {selectedFile && selectedFile.length > 0 ? (
            <div className="flex flex-row flex-wrap justify-center gap-4">
              {selectedFile.map((file, id) => {
                return (
                  <div
                    key={id}
                    className="aspect-[11/16] border-dashed border-2 border-fuchsia-500 p-2 h-60 rounded-lg"
                  >
                    <img
                      src={file}
                      alt=""
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                );
              })}
            </div>
          ) : null}
          <BackAndNext />
        </div>
      </div>
    </section>
  );
};

export default Form2;
