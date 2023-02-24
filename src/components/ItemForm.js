import React from "react";

function ItemForm({ formData: {name, category}, onItemFormSubmit, onFormChange }) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onFormChange} value={name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onFormChange} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
