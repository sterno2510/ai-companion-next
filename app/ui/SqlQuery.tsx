"use client";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import { generateSQLQuery } from "../lib/actions";
import FormGroup from "./FormGroup";
import { v4 as uuidv4 } from "uuid";
import { useFormStatus } from "react-dom";

function SubmitButtonWrapper() {
  const { pending } = useFormStatus();
  return (
    <SubmitButton type="submit" loading={pending}>
      Generate SQL Query
    </SubmitButton>
  );
}

const SqlQuery = () => {
  const [queryDescription, setQueryDescription] = useState("");
  const [tables, setTables] = useState([
    { id: uuidv4(), tableName: "", tableSchema: "" },
  ]);
  const [sqlQuery, setSqlQuery] = useState<string | null>(null);

  console.log("this is the result", sqlQuery);

  const handleSubmit = async () => {
    const SQLQueryResult = await generateSQLQuery({
      query: queryDescription,
      tables,
    });
    setSqlQuery(SQLQueryResult);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
    field: string
  ) => {
    const { name, value } = e.target;
    if (field === "queryDescription") {
      setQueryDescription(value);
    } else {
      setTables((prevTables) =>
        prevTables.map((table) =>
          table.id === id ? { ...table, [name]: value } : table
        )
      );
    }
  };

  const addTable = () => {
    setTables((prevTables) => [
      ...prevTables,
      { id: uuidv4(), tableName: "", tableSchema: "" },
    ]);
  };

  return (
    <div className="flex flex-col items-center p-5 min-h-screen">
      <div className="w-full max-w-3xl">
        <form action={handleSubmit} className="flex flex-col">
          {tables.map((table) => (
            <div key={table.id}>
              <FormGroup
                nameLabel={`Table Name: ${table.tableName}`}
                inputType="text"
                field="tableName"
                placeHolder="Enter your table name... (e.g) Users"
                formValue={table.tableName}
                changeFunction={(e) => handleChange(e, table.id, "table")}
              />
              <FormGroup
                nameLabel="Database Tables (e.g., Users: id, name, email, age; Orders: order_id, user_id, product_name)"
                inputType="text"
                field="tableSchema"
                placeHolder="Enter database table schema"
                formValue={table.tableSchema}
                changeFunction={(e) => handleChange(e, table.id, "table")}
              />
            </div>
          ))}
          <div className="flex justify-center mt-5 pb-4">
            <button
              type="button"
              className="w-fit p-2 mx-auto my-2 border-none rounded bg-black text-white hover:bg-white hover:text-black"
              onClick={addTable}
            >
              Add Another Table
            </button>
          </div>
          <FormGroup
            nameLabel="Query Description"
            inputType="text"
            field="queryDescription"
            placeHolder="Describe your query in natural language"
            formValue={queryDescription}
            changeFunction={(e) => handleChange(e, "-1", "queryDescription")}
          />
          <div className="flex justify-center mt-5 pb-4">
            <SubmitButtonWrapper />
          </div>
        </form>
      </div>
      {sqlQuery && (
        <div className="flex flex-col items-center">
          <div
            className="mt-20 p-5 border border-gray-300 rounded-md"
            dangerouslySetInnerHTML={{ __html: sqlQuery }}
          />
        </div>
      )}
    </div>
  );
};

export default SqlQuery;
