import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sotredRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }

        return (
          <div>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sotredRooms}/>
          </div>
        );
      }}
    </RoomConsumer>
  );
}
