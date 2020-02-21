import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
// get unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    price,
    capacity,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  //get unique types
  let types = getUnique(rooms, "type");
  // add types
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  // get unique capacity
  let person = getUnique(rooms, "capacity");
  person = person.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
            className="form-control"
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
            className="form-control"
          >
            {person}
          </select>
        </div>
        {/* end guests */}
        {/* Rooms price */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            type="range"
            name="price"
            max={maxPrice}
            min={minPrice}
            value={price}
            id="price"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of Rooms price */}
        {/* Rooms size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="mainSize"
              id="size"
              value={minSize}
              className="size-input"
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              className="size-input"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* end of Rooms size */}
        {/* extra */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extra */}
      </form>
    </section>
  );
}
