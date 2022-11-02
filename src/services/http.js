const {BASE_URL} = process.env;

const getBaseUrl = () => BASE_URL;

const getHeaders = () => {
  const token = localStorage.getItem('id_token');
  const headers = {
    'Content-Type': 'application/json',
    accept: 'application/json'
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  if (process.env.CLIENT_ID && process.env.NODE_ENV === 'development') {
    headers.clientId = process.env.CLIENT_ID;
  }

  return headers;
};

const saveData = (url, data, method) => fetch(`${getBaseUrl()}${url}`, {
  method,
  headers: getHeaders(),
  body: JSON.stringify(data)
});

const handleResponse = response => {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
  throw new Error(response.statusText);
};

const http = {
  get: async url => {
    const response = await fetch(`${getBaseUrl()}${url}`, {
      headers: getHeaders()
    });
    return handleResponse(response);
  },
  post: async (url, data) => {
    const response = await saveData(url, data, 'POST');
    return handleResponse(response);
  },
  put: async (url, data) => {
    const response = await saveData(url, data, 'PUT');
    return handleResponse(response);
  }
};

export default http;
