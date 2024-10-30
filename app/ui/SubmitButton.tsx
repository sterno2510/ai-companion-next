import React from "react";

const SubmitButton = ({ loading, children, type, onClick = () => {} }) => (
  <button
    data-testid="submit-button"
    type={type}
    disabled={loading}
    onClick={onClick}
    className={`w-fit px-4 py-2 my-2 rounded cursor-pointer bg-black text-white hover:bg-white hover:text-black
      ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"}`} // ButtonStyled
  >
    <div className="flex items-center">
      {" "}
      {/* ButtonContentStyled */}
      {loading && (
        <div
          data-testid="spinner"
          className="border-4 border-gray-300 border-l-black rounded-full w-5 h-5 animate-spin mr-2" // SpinnerStyled
          style={{ borderColor: "rgba(0, 0, 0, 0.1)" }} // Adding light border color
        />
      )}
      {children}
    </div>
  </button>
);

export default SubmitButton;
