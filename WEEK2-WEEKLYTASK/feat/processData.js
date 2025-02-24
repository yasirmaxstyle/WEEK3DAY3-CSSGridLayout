export function getDataFromServer(status, callback) {
    setTimeout(() => {
        if (status) {
            callback(['Product 1', 'Product 2', 'Product 3'], null);
        } else {
            const err = new Error('Failed to fetch data');
            err.name = 'Error';
            callback(null, err);
        }
    }, 3000);
}

export const processData = async (data, err) => {
    try {
        const response = await data;
        if (response === null) throw new Error(err.message);
        return console.log(response);
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
    }
};
