
import axios from 'axios';
import { result } from 'lodash';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Banner from './Banner';

function Sh() {
  return (
    <>
    <Banner />
        <h1 className="text-center my-5 py-5">Product Detail Page</h1>

        </>
  )
}

export default Sh