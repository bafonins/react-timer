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