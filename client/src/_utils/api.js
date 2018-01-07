const post = item => {
    return fetch('/api', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(item)
    })
        .then(response => response.json());
};

const update = item => {
    return fetch('/api', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(item)
    });
};

const getAll = () => {
    return fetch('/api', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    })
        .then(response => response.json());
};

const remove = id => {
    return fetch('/api', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({ id })
    });
}

export default {
    post,
    update,
    getAll,
    delete: remove
};