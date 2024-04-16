import React from "react";
import Table from "react-bootstrap/Table";
import { sortDown, sortUp } from "../utils";
import CollegeCard from "./CollegeCard";

const CollegeComponent = ({
  collegeInfo,
  objSort,
  setObjSort,
  getSortData,
}) => {
  const updateObjSort = (field) => {
    let currentObj = objSort;
    currentObj[field] = !currentObj[field];
    setObjSort(currentObj);
    getSortData(field, !currentObj[field]);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="table-secondary">
            <th scope="col">CD Rank</th>
            <th scope="col" onClick={() => updateObjSort("clgrating")}>
              CD Rating
              {objSort?.clgrating ? sortUp : sortDown}
            </th>
            <th scope="col">Colleges</th>
            <th scope="col" onClick={() => updateObjSort("fees")}>
              Course Fees
              {objSort?.fees === true ? sortUp : sortDown}
            </th>
            <th scope="col">Place</th>
            <th scope="col" onClick={() => updateObjSort("rating")}>
              User Rating
              {objSort?.rating ? sortUp : sortDown}
            </th>
            <th scope="col">Featured</th>
          </tr>
        </thead>
        <tbody>
          {collegeInfo.map((curVal, id) => {
            id++;
            return <CollegeCard key={id} myData={curVal} currentIndex={id} />;
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CollegeComponent;
