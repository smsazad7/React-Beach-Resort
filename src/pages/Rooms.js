import React from 'react'
import Hero from '../component/Hero'
import Bennar from '../component/Banner'
import {Link}from "react-router-dom"
import RoomContainer from '../component/RoomContainer'

export default function Rooms() {
        return (
          <>
          <Hero hero="roomsHero">
            <Bennar title="our rooms">
              <Link to="/" className="btn-primary">
                return home
              </Link>
            </Bennar>
          </Hero>
          <RoomContainer/>
          </>
        );
}
