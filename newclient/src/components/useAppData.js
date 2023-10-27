import { useEffect, useState } from 'react';
import axios from 'axios';

//dummy data source
// import dayList from '../data/days';
// import dailyAppointments from '../data/appointments';

import './App.scss';
import { fetchData } from '../helpers/api';

export default function useAppData(props) {
  //iniitalize app state and set day to Monday
  const [state, setState] = useState({
    logged: false,
    user: null,
    map: {},
    markers: [],
    sites: [],
    userSites: [],
    count: 0
  });




  return {
    state,
    setState,
  };
}
