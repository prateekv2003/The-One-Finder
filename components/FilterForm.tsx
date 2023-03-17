import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useContext } from "react";
import { AppContext } from "context/AppContext";

const people = [
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];
function MyListbox({ onApplyClick }) {
  const { setIsDrinker, setIsSmooker, setWhoFor, setWhatFor } =
    useContext(AppContext);

  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPersons, setSelectedPersons] = useState([]);

  function isSelected(value) {
    return selectedPersons.find((el) => el === value) ? true : false;
  }

  function handleSelect(value) {
    if (!isSelected(value)) {
      const selectedPersonsUpdated = [
        ...selectedPersons,
        people.find((el) => el === value),
      ];
      setSelectedPersons(selectedPersonsUpdated);
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  }

  function handleDeselect(value) {
    const selectedPersonsUpdated = selectedPersons.filter((el) => el !== value);
    setSelectedPersons(selectedPersonsUpdated);
    setIsOpen(true);
  }
  return (
    <div className="absolte top-0 bottom-0 right-0 flex flex-wrap items-end justify-around gap-4 p-12 border rounded-sm bg-gray-200">
      <div className="flex flex-col w-[45%] md:w-auto justify-end items-start gap-2">
        <label
          htmlFor="small"
          className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
        >
          Who to date?
        </label>
        <select
          id="small"
          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onClick={(e) => {
            setWhoFor(e.target.value);
          }}
        >
          <option selected value="M">
            Male
          </option>
          <option value="F">Female</option>
          <option value="NB">Other</option>
        </select>
      </div>
      <div className="flex flex-col w-[45%] md:w-auto justify-end  items-start gap-2">
        <label
          htmlFor="small"
          className="block mb-2 text-sm md:text-xl font-medium text-gray-900 dark:text-white"
        >
          What to find?
        </label>
        <select
          id="small"
          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onClick={(e) => {
            setWhatFor(e.target.value);
          }}
        >
          <option selected value="R">
            Relationship
          </option>
          <option value="C">Casual</option>
          <option value="F">Friendship</option>
        </select>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap gap-4 items-end">
        <div className="flex items-center px-4 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => {
              setIsSmooker(e.target.checked ? "Y" : "N");
            }}
          />
          <label
            htmlFor="bordered-checkbox-1"
            className="w-full py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Smoker
          </label>
        </div>
        <div className="flex items-center px-4 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <input
            id="bordered-checkbox-2"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => {
              setIsDrinker(e.target.checked ? "Y" : "N");
            }}
          />
          <label
            htmlFor="bordered-checkbox-2"
            className="w-full py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Drinker
          </label>
        </div>
        <button
          onClick={() => onApplyClick()}
          className="text-white bg-fuchsia-500 border-0 py-1 px-8 focus:outline-none hover:bg-fuchsia-600 rounded text-lg cursor-pointer"
        >
          Apply
        </button>
      </div>
      {/* <label
        htmlFor="default"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Default select
      </label>
      <select
        id="default"
        className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <label
        htmlFor="large"
        className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
      >
        Large select
      </label>
      <select
        id="large"
        className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select> */}
    </div>
  );
}

export default MyListbox;
