const {BASE_URL} = process.env;

const saveData = (url, data, method) => fetch(`${BASE_URL}${url}`, {
  method,
  headers: {
    'Content-Type': 'application/json'
  },
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
    const response = await fetch(`${BASE_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json'
      }
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
