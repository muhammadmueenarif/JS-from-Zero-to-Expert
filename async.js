// asynchronous function
async function fetchData() {
    return 'data fetched';    
}

async function main() {
    const data = await fetchData();
    console.log(data);    
}

main();

// now we will use error handling
async function fetchData() {
    throw new Error('failed to fetch data');
    }

async function main() {
    try {
        const data = fetchData();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}

main();
