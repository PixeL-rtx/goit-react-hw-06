import { createSlice, nanoid } from "@reduxjs/toolkit";
import contacts from "../components/contacts.json";

const initialState = {
  items: contacts,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      action.payload.id = nanoid();
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
