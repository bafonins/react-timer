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

export const getElapsedTimeString = (timer) => {
    let elapsed = timer.elapsed;

    if (timer.runningSince) {
        elapsed += Date.now() - timer.runningSince;
    }

    const s = Math.floor((elapsed / 1000) % 60);
    const m = Math.floor((elapsed / 1000 / 60) % 60);
    const h = Math.floor(elapsed / 1000 / 60 / 60);

    return `${h}:${m}:${s}`;
}