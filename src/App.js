import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import Menu from './components/menu/Menu';

const App = () => {
  const [menu, setMenu] = useState([]);
  if (!firebase.apps.length) {
    const config = {
      apiKey: 'AIzaSyACn6Ud6f5d-XRqx953m8VJo5OppHSvYVc',
      authDomain: 'matarkjallarinn.firebaseapp.com',
      databaseURL: 'https://matarkjallarinn.firebaseio.com',
      projectId: 'matarkjallarinn',
      storageBucket: 'matarkjallarinn.appspot.com',
      messagingSenderId: '30132451206',
      appId: '1:30132451206:web:9e04a5506ee297e6'
    };
    firebase.initializeApp(config);
  }

  const db = firebase.firestore();

  useEffect(() => {
    const newArray = [];
    db.collection('menu')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = doc.data();
          newArray.push(data);
        });
      })
      .then(() => {
        setMenu(newArray);
      });
  }, []);

  return (
    <div>
      <Menu menu={menu} />
    </div>
  );
};

export default App;
