import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTodo } from '../reducers/todoReducer';
const api_url = 'http://192.168.1.101:3000/port';


export const fetchTodos = () => {
 return async dispatch => {
   try {
     const response = await fetch(api_url);
     const data = await response.json();
     // dữ liệu lấy được từ api về, duyệt mảng và lưu vào store của redux


       // console.log(data);


   // //Tham khảo ở screen có hàm xử lý việc thêm
   // const handleAddTodo = ()=>{
   //     let duLieuThem = { id: Math.random().toString(), title: title };
   //     dispatch( addTodo ( duLieuThem )  );
   // }




     data.forEach(row => {
       //    dữ liệu dạng: {
       //     title: "title 1",
       //     status: false,
       //     id: "1"
       //     },
       // console.log(JSON.parse(row));
       // console.log(row.title);
      
     
       dispatch(addTodo( row));
     });
   } catch (error) {
     console.error('Error fetching todos:', error);
   }
 };
};






export const deleteTodoApi = createAsyncThunk(
  'todo/deleteTodoApi',
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`${api_url}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        return id;
      } else {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTodoAPI = createAsyncThunk(
  'todo/addTodoAPI',
  async (objTodo, thunkAPI) => {
    try {
      const response = await fetch(api_url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objTodo)
      });
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTodoApi = createAsyncThunk(
  'todo/updateTodoApi',
  async (objUpdate, thunkAPI) => {
    try {
      const response = await fetch(`${api_url}/${objUpdate.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objUpdate.data)
      });
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleTodoApi = createAsyncThunk(
  'todo/toggleTodoApi',
  async (objUpdate, thunkAPI) => {
    try {
      const response = await fetch(`${api_url}/${objUpdate.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objUpdate.data)
      });
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);