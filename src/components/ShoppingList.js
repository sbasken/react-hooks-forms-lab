import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  });

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e) {
    setSearchQuery(e.target.value)
  }

  function onFormChange(e) {
    let key = e.target.name
    let value = e.target.value


    const newItem = {
      ...formData,
      id: uuid(),
      [key]: value
    }
    setFormData(newItem)
  }


  function onItemFormSubmit(e) {
    e.preventDefault()
    addElement(formData)
  }

  function addElement(element) {
    setItems([...items, element])
  }

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") {
        return true;
      } else {
        return item.category === selectedCategory;
      }
    })
    .filter((item) => {
      if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return item
      }
    })


  return (
    <div className="ShoppingList">
      <ItemForm formData={formData} onItemFormSubmit={onItemFormSubmit} onFormChange={onFormChange}/>
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
        searchQuery={searchQuery} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
        <Item key={item.id} name={item.name} category={item.category}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
