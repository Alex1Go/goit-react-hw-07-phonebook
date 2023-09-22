import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // fetchContacts: (state, action) => {
  //   state.items =
  // },
  // deleteContact: (state, action) => {
  //   state.items = state.items.filter(el => el.id !== action.payload);
  // },
  // addContact: (state, action) => {
  //   state.items = [...state.items, action.payload];
  // },
});

export const { deleteContact, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
