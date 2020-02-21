import React from 'react'
import Hero from '../component/Hero'
import Bennar from '../component/Banner'
import {Link}from "react-router-dom"

export default function Error() {
        return (
          <Hero>
            <Bennar title="404" subtitle="pages not found">
              <Link to="/" className="btn-primary">
               return home
              </Link>
            </Bennar>
          </Hero>
        );
}
