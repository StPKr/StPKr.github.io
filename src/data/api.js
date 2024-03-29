export async function apiGet(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Handle the JSON data
        return data;
    } catch (error) {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error.message);
    }
}