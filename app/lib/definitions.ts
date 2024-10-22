export type User = {
  id: string;
  name: string;
  email: string;
};

export type Resume = {
  _id: string; // Unique identifier for the resume
  user: string; // User ID referencing the associated User
  newResume: string; // HTML string representing the resume content
  createdAt: string; // Timestamp of when the resume was created
  updatedAt: string; // Timestamp of the last update
  __v: number; // Version key for Mongoose
};
