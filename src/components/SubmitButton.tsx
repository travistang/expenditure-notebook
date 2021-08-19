import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function SubmitButton() {
  return (
    <div className="h-1/6 md:h-1/3 center w-full">
      <button className="h-20 w-20 md:h-96 md:w-96 rounded-full bg-secondary-500 text-xl md:text-7xl">
        <FontAwesomeIcon icon={faPen} />
      </button>
    </div>
  );
}
