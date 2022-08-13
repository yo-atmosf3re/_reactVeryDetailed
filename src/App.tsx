import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Select, { ItemsType } from './components/Select/Select';
import { Example } from './components/UseMemo';
import { UseMemoFactorialCounter } from './components/UseMemo';

function App() {
  let [collapsed, setCollapsed] = useState<boolean>(true)
  let [titleTown, setTitleTown] = useState('Select town')
  const items: ItemsType = [
    {
      title: 'Moscow',
      value: 1,
      country: 'Russia',
      population: 12000000,
    },
    {
      title: 'Minsk',
      value: 2,
      country: 'Belorussia',
      population: 2000000,
    },
    {
      title: 'Kiev',
      value: 3,
      country: 'Ukrain',
      population: 3000000,
    },
    {
      title: 'Piter',
      value: 4,
      country: 'Russia',
      population: 5000000,
    },
    {
      title: 'Omsk',
      value: 5,
      country: 'Russia',
      population: 1200000,
    },
    {
      title: 'Kaliningrad',
      value: 6,
      country: 'Russia',
      population: 500000,
    },
    {
      title: "Harkov",
      value: 7,
      country: 'Ukrain',
      population: 1500000,
    },
    {
      title: 'Odessa',
      value: 8,
      country: 'Ukrain',
      population: 1000000,
    },
    {
      title: 'Brest',
      value: 9,
      country: 'Belorussia',
      population: 300000,
    },
    {
      title: 'Grodno',
      value: 10,
      country: 'Belorussia',
      population: 400000,
    },
  ]
  let newItemsFilteredLetters = items.filter(u => u.title.toLowerCase().indexOf('m') > -1)
  let newItemsFiltredPopulation = items.filter(u => u.population > 1500000)
  let newItemsFiltredCountry = items.filter(i => i.country === 'Russia');
  return (
    <div className='App'>
      {/* <UseMemoFactorialCounter /> */}
      {/* <Example /> */}
      <Select titleTown={titleTown} collapsed={collapsed} items={newItemsFilteredLetters} setCollapsed={setCollapsed} setTitleTown={setTitleTown} />
      <hr />
      <Select titleTown={titleTown} collapsed={collapsed} items={newItemsFiltredPopulation} setCollapsed={setCollapsed} setTitleTown={setTitleTown} />
      <hr />
      <Select titleTown={titleTown} collapsed={collapsed} items={newItemsFiltredCountry} setCollapsed={setCollapsed} setTitleTown={setTitleTown} />
    </div>
  );
}

export default App;
