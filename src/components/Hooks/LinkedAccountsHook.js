import React, { useEffect, useState } from 'react';

const LinkedAccountsHook = () => {
  const [linkedBanks, setLinkedBanks] = useState([]);
    fetch('LinkedAccounts.json')
      .then(res => res.json())
      .then(data =>{ 
        console.log('linkedAccount', data);
        setLinkedBanks(data)})
  return [linkedBanks, setLinkedBanks];
};

export default LinkedAccountsHook;