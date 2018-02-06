// create-react-app already has promise-polyfill and fetch-polyfill
// hence no imports needed

const BASE_PATH = '/api/timers';
const GET_HEADERS = { 'Accept': 'application/json' };
const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export const fetchTimers = (success, failure) => {
    return request(
        fetch(BASE_PATH, {
            headers: GET_HEADERS
        }),
        success,
        failure
    );
}

export const createTimer = (timer, success, failure) => {
    return request(
        fetch(BASE_PATH, {
            method: 'POST',
            body: JSON.stringify(timer),
            headers: HEADERS
        }),
        success,
        failure
    );
}

export const editTimer = (timer, success, failure) => {
    return request(
        fetch(BASE_PATH, {
            method: 'PUT',
            body: JSON.stringify(timer),
            headers: HEADERS
        }),
        success,
        failure
    );
}

export const deleteTimer = (timer, success, failure) => {
    return request(
        fetch(BASE_PATH, {
            method: 'DELETE',
            body: JSON.stringify(timer),
            headers: HEADERS
        }),
        success,
        failure
    );
}

// add basic response processing
const request = (f, success, failure) => {
    return f.then(checkStatus)
        .then(parseJSON)
        .then(success)
        .catch(failure);
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