// api.js

const BASE_URL = 'http://localhost:8000/';

export const login = async (credentials: any) => {
  try {

    let data = {
        'username': credentials.username,
        'password': credentials.password
    }

    const response = await fetch(`${BASE_URL}api/token/`, {
        mode:'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({'username': credentials.username, 'password': credentials.password}),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return await response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const register = async (userData: any) => {
  try {
    const response = await fetch(`${BASE_URL}register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Registration failed');
    }
    return await response.json();
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const fetchCategories = async () => {

  let headers = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }

  try {
    const response = await fetch(`${BASE_URL}lists/category/`, {
      headers: headers
    });
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const fetchExpenses = async () => {

  let headers = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }

  try {
    const response = await fetch(`${BASE_URL}lists/expense/`, {headers: headers});
    if (!response.ok) {
      throw new Error('Failed to fetch expenses');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const fetchIncomes = async () => {

  let headers = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }

  try {
    const response = await fetch(`${BASE_URL}lists/income/`, {headers:headers});
    if (!response.ok) {
      throw new Error('Failed to fetch incomes');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};


export const getCategoryDetail = async (id: any) => {

  try {
    const response = await fetch(`${BASE_URL}lists/get_category/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch category');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};


// Define similar functions for other endpoints (goal, expense, income)

