/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-09-28 03:07:08
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-09-28 21:59:31
 */
import React, { useState } from "react";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";
import Select from "react-select";
import "./UserInfo.css";
function UserInfo() {
  // const [presence, setPresence] = useState({});
  const presence = {
    value: "available",
    label: "Available",
  };
  const presenceOpts = [
    { value: "available", label: "Available" },
    { value: "dnd", label: "Busy" },
    { value: "away", label: "Away" },
  ];
  const setPresenceFun = (presence) => {
    presence = presence.value;
  };

  const renderPresenceOption = (option) => {
    return (
      <div className="presenceOption">
        <FontAwesome name="circle" className={"presenceIcon " + option.value} />
        {option.label}
      </div>
    );
  };

  const renderPresenceValue = (presence) => {
    return (
      <div className="currentPresence">
        <FontAwesome
          name="circle"
          className={"presenceIcon " + presence.value}
        />
      </div>
    );
  };
  return (
    <div className="UserInfo">
      <div className="authenticated">
        <div className="user">
          <div className="presenceControl">
            <Select
              name="presence"
              value={presence.value}
              options={presenceOpts}
              onChange={setPresenceFun}
              clearable={false}
              optionRenderer={renderPresenceOption}
              valueRenderer={renderPresenceValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
