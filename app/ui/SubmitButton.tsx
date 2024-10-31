import React from "react";

interface SubmitButtonProps {
  loading: boolean;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  loading,
  children,
  type,
  onClick = () => {},
}) => (
  <button
    data-testid="submit-button"
    type={type}
    disabled={loading}
    onClick={onClick}
    className={`w-fit px-4 py-2 my-2 rounded cursor-pointer bg-black text-white hover:bg-white hover:text-black
      ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"}`}
  >
    <div className="flex items-center">
      {loading && (
        <div
          data-testid="spinner"
          className="border-4 border-gray-300 border-l-black rounded-full w-5 h-5 animate-spin mr-2"
          style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}
        />
      )}
      {children}
    </div>
  </button>
);

export default SubmitButton;
