import React, { useState, useEffect } from "react";
import CollegeComponent from "./CollegeComponent";
import collegeData from "../Data.json";
import { paginate, sortData } from "../utils";
import Form from "react-bootstrap/Form";

const Home = () => {
  const [collegeList, setCollegeList] = useState([]);
  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState(null);
  const [objSort, setObjSort] = useState({
    rating: true,
    fees: true,
    clgrating: true,
  });

  const getFilterData = (e) => {
    const searchVal = e.target.value;
    let data;
    if (searchVal.trim() !== "") {
      let updatedData = collegeData.filter(
        (colData) =>
          colData.college.toLowerCase().includes(searchVal.toLowerCase()) ===
          true
      );
      data = paginate(updatedData, 10, page);
      setFilterData(data);
    } else {
      setFilterData(null);
      data = paginate(collegeData, 10, page);
    }
    setCollegeList(data);
  };
  const getCardData = () => {
    let data;
    if (filterData !== null) {
      data = paginate(filterData, 10, page);
    } else {
      data = paginate(collegeData, 10, page);
    }
    setCollegeList((prev) => [...prev, ...data]);
  };
  const getSortData = (sortBy, orderBy) => {
    sortData(collegeList, sortBy, orderBy, setCollegeList);
  };
  useEffect(() => {
    getCardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, filterData]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search by College Name"
          onChange={getFilterData}
        />
      </Form>
      <CollegeComponent
        collegeInfo={collegeList}
        objSort={objSort}
        setObjSort={setObjSort}
        getSortData={getSortData}
      />
    </>
  );
};

export default Home;
