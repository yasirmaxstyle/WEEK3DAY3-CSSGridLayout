export async function getDataUser() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url); // start fetching data
        if (!response.ok) throw new Error(response.statusText); // if failed it will be thrown to catch
        const dataJSON = await response.json(); // getting data and convert to json

        const nameAddress = []
        // sorting name and address only
        dataJSON.forEach(element => {
            nameAddress.push({ name: element.name, address: element.address.city })
        });

        // sorting address in ascending order
        nameAddress.sort((a, b) => {
            if (a.address < b.address) return -1;
            if (a.address > b.address) return 1;
        })
        console.log(nameAddress);
        // return nameAddress;
    } catch (error) {
        if (error instanceof Error) console.log(error.message)
    }
}