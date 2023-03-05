import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

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
function MyListbox() {
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
    <div className="absolte top-0 bottom-0 right-0 flex items-center justify-around gap-4 p-12">
      <div className="flex flex-col items-start gap-2">
        <label
          htmlFor="small"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Who to date?
        </label>
        <select
          id="small"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="M">Male</option>
          <option value="F">Female</option>
          <option value="NB">Other</option>
        </select>
      </div>
      <div className="flex flex-col items-start gap-2">
        <label
          htmlFor="small"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          What to find?
        </label>
        <select
          id="small"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected value="R">Relationship</option>
          <option value="C">Casual</option>
          <option value="F">Friendship</option>
        </select>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-checkbox-1"
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Smooker
          </label>
        </div>
        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            checked
            id="bordered-checkbox-2"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-checkbox-2"
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Drinker
          </label>
        </div>
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
