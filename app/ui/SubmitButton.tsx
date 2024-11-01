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
      ${loading ? "opacity-90 cursor-not-allowed" : "hover:bg-gray-600"}`}
  >
    <div className="flex items-center gap-2">
      {loading && (
        <div
          data-testid="spinner"
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        />
      )}
      {children}
    </div>
  </button>
);

export default SubmitButton;
