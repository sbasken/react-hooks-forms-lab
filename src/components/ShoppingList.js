import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e) {
    setSearchQuery(e.target.value)
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
      <ItemForm />
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
