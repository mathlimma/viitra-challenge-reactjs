import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';

import { FoodsContainer } from './styles';

const Dashboard = () => {
  const [foods, setFoods] = useState([]);
  const [editingFood, setEditingFood] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  async function handleAddFood(food) {
    try {
      // TODO ADD A NEW FOOD PLATE TO THE API
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(food) {
    try {
      // TODO UPDATE A FOOD PLATE ON THE API
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFood(id) {
    try {
      // TODO DELETE A FOOD PLATE ON THE API
    } catch (err) {
      console.log(err);
    }
  }

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food) {
    try {
      // TODO SET THE CURRENT EDITING FOOD ID IN THE STATE
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
