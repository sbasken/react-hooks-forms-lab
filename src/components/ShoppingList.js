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

  const filteredCategory = items.filter((item) => {
   if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
    return item
   }
  })
  console.log(filteredCategory)


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function displayItems() {
    if (searchQuery === "") {
      return itemsToDisplay.map((item) => (
        <Item key={item.id} name={item.name} category={item.category}/>
        ))
    } else {
      return filteredCategory.map((item) => (
        <Item key={item.id} name={item.name} category={item.category}/>
        ))
    }
  }

  console.log("filtered" + filteredCategory)

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
        searchQuery={searchQuery} 
      />
      <ul className="Items">
        {displayItems()}
      </ul>
    </div>
  );
}

export default ShoppingList;
