import React from "react";

const CollegeCard = ({ myData, currentIndex }) => {
  const { fees, college, clgrating, district, rating, feature } = myData;
  return (
    <tr>
      <td>#{currentIndex}</td>
      <td>{clgrating}</td>
      <td>{college}</td>
      <td>{fees}</td>
      <td>{district}</td>
      <td>{rating}</td>
      <td>{feature ? "Good" : "Average"}</td>
    </tr>
  );
};

export default CollegeCard;
