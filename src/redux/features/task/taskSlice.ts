import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "12345",
      title: "abc",
      desctiption: "hello I am Katalan",
      dueDate: "2024",
      isCompleted: false,
      priority: "high",
    },
  ],
};
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
// export const selectTask=(state:RootState)=>{

// }
export default taskSlice.reducer;
