import uuid from 'uuid';

export const createTimer = (title, project) => {
    const timer = {
        title: title || '',
        project: project || '',
        id: uuid.v4(),
        elapsed: 0
    };

    return timer;
}

export const isEmptyString = (str) => {
    return str.trim().length <= 0;
}

export const getElapsedTimeString = (timer) => {
    let elapsed = timer.elapsed;

    if (timer.runningSince) {
        elapsed += Date.now() - timer.runningSince;
    }

    function formatElapsed(val) {

        if ((val + '').length === 1) {
            return '0' + val;
        } else {
            return val + '';
        }
    }

    const s = formatElapsed(Math.floor((elapsed / 1000) % 60));
    const m = formatElapsed(Math.floor((elapsed / 1000 / 60) % 60));
    const h = formatElapsed(Math.floor(elapsed / 1000 / 60 / 60));

    return `${h}:${m}:${s}`;
}