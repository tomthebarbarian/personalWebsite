import React from "react";
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from 'react-router-dom';
import classNames from "classnames";



const SideBar = props => {

  const history = useNavigate();
  return (

    <>

      <div className="sidebar">
        <Navigation

          onSelect={({ itemId }) => {
            // push to the route
            history.push(itemId);

          }}

          items={[
            {
              title: 'Solar Map',
              itemId: '/solarmap',

            },
            {
              title: 'My Sites',
              itemId: '/sites',

              subNav: [
                {
                  title: 'Add Site',
                  itemId: '/add_site',
                },

              ],
            },
            {
              title: 'Scoreboard',
              itemId: '/scoreboard',
            },
          ]}
        />
      </div>
    </>

  );
};

export default SideBar;