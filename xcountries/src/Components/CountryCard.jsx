import React from "react";

const CountryCard = ({ country }) => {
  console.log(country);
  return (
    <div
    className="countryCard"
      style={{
        height: "150px",
        width: "150px",
        margin: ".5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        border: '5px solid lightgray',
        textAlign: 'center'
      }}
    >
      <img
        src={country.png}
        width={100}
        height={100}
        style={{ objectFit: "cover" }}
        alt={country.common}
      />
      <div>{country.common}</div>
    </div>
  );
};

export default CountryCard;
