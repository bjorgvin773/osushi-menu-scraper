import React from 'react';

const MenuItem = ({ menuItem }) => {
  const { title, price, img } = menuItem;
  console.log('title', title);
  return (
    <div className='food-card'>
      <img src={img} />
      <h3>{title}</h3>
      <p className='price'>{price} Kr</p>
      <form>
        <label htmlFor='name'>Nafn</label>
        <br />
        <input type='text' id='name' name='name' />
        <br />
        <label htmlFor='contact'>Netfang/Símanúmer</label>
        <br />
        <input type='text' id='contact' name='contact' />
        <br />
        <label htmlFor='rating'>Stjörnugjöf</label>
        <br />
        <input type='number' id='rating' name='rating' min='0' max='5' />
        <br />
        <label htmlFor='remark'>Umsögn</label>
        <br />
        <textarea
          rows='10'
          cols='42'
          id='remark'
          name='remark'
          maxlength='500'
        ></textarea>
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default MenuItem;
