import React from 'react'
import { useState } from 'react';
import Header from './Header'
import {
  Card,
  Title,
  Text,
  Tab,
  TabList,
  ColGrid,
  Block,
} from '@tremor/react';

import Cards from "./Dashboard-Components/Cards";
import FirstContainer from "./Dashboard-Components/FirstContainer";
import SecondContainer from "./Dashboard-Components/SecondContainer";

const Dashboard = () => {
  const [selectedView, setSelectedView] = useState(1);
  return (
    <div className="container mt-5">
      <Header />
      <main>
        <Title>Kontrol Paneli</Title>
        <Text>USKON ERP için satış ve büyüme verileri</Text>
        <TabList defaultValue={ 1 } handleSelect={ (value) => setSelectedView(value) } marginTop="mt-6">
            <Tab value={ 1 } text="Genel" />
            <Tab value={ 2 } text="Performans" />
        </TabList>
    
        { selectedView === 1 ? (
            <>
              <Cards />
              <FirstContainer />
            </>
           ) : (
              <SecondContainer />
            ) }
      </main>
    </div>
    
      );
}

export default Dashboard