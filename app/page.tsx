'use client';
import React, { useState } from 'react';
import MainContainer from './components/mainContainer';
import Image from 'next/image';
import coffee from '../public/coffee.jpg';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { addConfigToStorage } from '@/redux/features/storageSlice';
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const [drinksQty, setDrinksQty] = useState(6);
  const [toolSize, setToolSize] = useState('Стандартный');

  const dispatch = useDispatch<AppDispatch>();

  const onStandartClick = () => {
    const img = document.querySelector('img');
    img!.style.width = '500px';
    setToolSize('Стандартный');
  };
  const onBiggerClick = () => {
    const img = document.querySelector('img');
    img!.style.width = '600px';
    setToolSize('Увеличенный');
  };

  const chooseDrinkQty = (event: any) => {
    setDrinksQty(Number(event.target.innerHTML));
  };

  const addToStorage = () => {
    dispatch(
      addConfigToStorage({
        id: uuidv4(),
        config: toolSize,
        drinksQty,
        toolsQty: 1,
      }),
    );
  };

  return (
    <>
      <MainContainer>
        <div className="flex min-h-screen items-center justify-between flex-col p-24">
          <h1>COFFEE</h1>
          <div>Выбранная конфигурация:</div>
          <div>Размер устройства: {toolSize}</div>
          <div>Количество: {drinksQty}</div>
          <Image width={500} height={500} src={coffee} alt="coffee-mac"></Image>
          <div className="flex justify-between">
            <button onClick={onStandartClick}>Стандартный</button>
            <button onClick={onBiggerClick}>Увеличенный</button>
          </div>
          <div>Выберите количество напитков</div>
          <div className="flex justify-between">
            <button onClick={chooseDrinkQty}>6</button>
            <button onClick={chooseDrinkQty}>8</button>
            <button onClick={chooseDrinkQty}>12</button>
          </div>
          <div>
            <button onClick={addToStorage}>Добавить в хранилище</button>
          </div>
        </div>
      </MainContainer>
    </>
  );
}

export default Home;
