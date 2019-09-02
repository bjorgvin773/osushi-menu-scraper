import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menu }) => {
  if (menu) {
    console.log(menu);
    return (
      <div>
        {menu.map(menuItem => (
          <MenuItem key={menuItem.title} menuItem={menuItem} />
        ))}
      </div>
    );
  } else {
    return <div>Nothing to see</div>;
  }
};

export default Menu;
