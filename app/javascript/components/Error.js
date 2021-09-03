import React from "react";

const Error = ({ error }) => {
  const renderError = () => {
    return Object.entries(error).map((key_val_pair_arr) => {
      const attr = key_val_pair_arr[0];
      const errors = key_val_pair_arr[1];
      return (
        <>
          <p>{attr}</p>
          <ul>
            {errors.map((err) => {
              return <li>{err}</li>;
            })}
          </ul>
        </>
      );
    });
  };
  return (
    <div>
      {renderError()}
      <p>{JSON.stringify(error)}</p>
    </div>
  );
};

export default Error;