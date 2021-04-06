import React, { useEffect, useState } from "react";
import { Input } from "../../../common/InputForms/InputForms";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

const ProfileStatus = (props) => {
  const [editMode, toggleMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => toggleMode(true);
  const deactivateEditMode = () => {
    toggleMode(false);
    props.pushProfileStatus(status);
  };

  const updateStatus = (e) => setStatus(e.currentTarget.value);
  return (
    <>
      {!editMode && (
        <span onDoubleClick={activateEditMode}>{props.status}</span>
      )}
      {editMode && (
        <input
          onChange={updateStatus}
          onBlur={deactivateEditMode}
          autoFocus={true}
          name={"profileStatus"}
          value={status}
        />
      )}
    </>
  );
};

export default compose(connect(null, {}))(ProfileStatus);
