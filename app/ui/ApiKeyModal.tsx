const ApiKeymodal = () => {
  const apiKey = "";
  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal-content bg-white text-black rounded-lg p-8 shadow-lg max-w-md w-full relative">
        <h2 className="text-xl font-bold mb-4">Set Up Your OpenAI API Key</h2>
        <p className="mb-4">
          To keep costs down and prevent misuse, each user must set their own
          OpenAI API key. Follow these steps:
        </p>
        <ol className="list-decimal pl-5 mb-4">
          <li>
            Go to the{" "}
            <a
              href="https://platform.openai.com/docs/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              OpenAI platform
            </a>{" "}
            and create or log in to your account.
          </li>
          <li>
            After logging in, visit{" "}
            <a
              href="https://platform.openai.com/api-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              API Keys
            </a>{" "}
            and create a new secret key.
          </li>
          <li>Copy the key, paste it below, and click submit.</li>
        </ol>
        <input
          type="text"
          className="border p-2 rounded w-full mb-4"
          placeholder="Enter your OpenAI API key here"
          value={apiKey}
          // onChange={(e) => setApiKey(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            // onClick={handleApiKeySubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default ApiKeymodal;
