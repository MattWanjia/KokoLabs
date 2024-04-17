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

export const register = async (credentials: any) => {
  try {
    const response = await fetch(`${BASE_URL}lists/register_user`, {
      mode:'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
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

export const uploadExpense = async (details: any) => {
  console.log(details)

  try {
    const response = await fetch(`${BASE_URL}lists/expense/`, {
      mode:'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details.expense),
    });
    if (!response.ok) {
      throw new Error('Upload failed');
    }
    return await response.json();
  } catch (error) {
    console.error('Error uploading expense:', error);
    throw error;
  }
};

export const uploadIncome = async (details: any) => {

  console.log(details.income)

  try {
    const response = await fetch(`${BASE_URL}lists/income/`, {
      mode:'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details.income),
    });
    if (!response.ok) {
      throw new Error('Upload failed');
    }
    return await response.json();
  } catch (error) {
    console.error('Error uploading income:', error);
    throw error;
  }
};

export const uploadGoal = async (details: any) => {
  console.log(details)

  try {
    const response = await fetch(`${BASE_URL}lists/goal/`, {
      mode:'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details.goal),
    });
    if (!response.ok) {
      throw new Error('Upload failed');
    }
    return await response.json();
  } catch (error) {
    console.error('Error uploading goal:', error);
    throw error;
  }
};

export const uploadCategory = async (category: any) => {

  //console.log(category.category)

  try {
    const response = await fetch(`${BASE_URL}lists/category/`, {
      mode:'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({'name': category.category.name}),
    });
    if (!response.ok) {
      throw new Error('Upload failed');
    }
    return await response.json();
  } catch (error) {
    console.error('Error uploading income:', error);
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
    console.error('Error fetching expenses:', error);
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
    console.error('Error fetching income:', error);
    throw error;
  }
};


export const fetchGoal = async () => {

  let headers = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }

  try {
    const response = await fetch(`${BASE_URL}lists/goal/`, {headers:headers});
    if (!response.ok) {
      throw new Error('Failed to fetch goal');
    }

    let goal = await response.json()

    return goal[0];
  } catch (error) {
    console.error('Error fetching goal:', error);
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


export const getMonthlyTotals = async () => {
  let headers = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }

  try {
    const response = await fetch(`${BASE_URL}lists/get_monthly_totals`, {headers:headers});
    if (!response.ok) {
      throw new Error('Failed to fetch totals');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching totals:', error);
    throw error;
  }
};


// Define similar functions for other endpoints (goal, expense, income)

