// create-react-app already has promise-polyfill and fetch-polyfill
// hence no imports needed

const BASE_PATH = '/api/timers';
const GET_HEADERS = { 'Accept': 'application/json' };
const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export const fetchTimers = () => {
    return request(
        fetch(BASE_PATH, {
            headers: GET_HEADERS
        })
    );
}

export const createTimer = (timer) => {
    return request(
        fetch(BASE_PATH, {
            method: 'POST',
            body: JSON.stringify(timer),
            headers: HEADERS
        })
    );
}

export const updateTimer = (timer) => {
    return request(
        fetch(BASE_PATH, {
            method: 'PUT',
            body: JSON.stringify(timer),
            headers: HEADERS
        })
    );
}

export const deleteTimer = (timer) => {
    return request(
        fetch(BASE_PATH, {
            method: 'DELETE',
            body: JSON.stringify(timer),
            headers: HEADERS
        })
    );
}

// add basic response processing
const request = (f) => {
    return f.then(checkStatus).then(parseJSON);
}

// https://github.com/github/fetch#handling-http-error-statuses
const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;

      throw error;
    }
}
  
const parseJSON = (response) => {
    return response.json();
}