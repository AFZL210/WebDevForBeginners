import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./App.css"

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      nationality
      name
      age
      username
      friends {
        id
        name
        age
      }
    }
  }
`;

const DisplayData = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);

  if (loading) return <h1>Loading Data...</h1>;
  if (error) return <h1>Error!</h1>;

  return (
    <div>
      {data &&
        data.users.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Nationality: {user.nationality}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default DisplayData;
