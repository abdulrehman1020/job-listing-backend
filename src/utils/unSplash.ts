export const getRandomPhoto = async () => {
    try {
        const response = await fetch(
            ` ${process.env.BASE_URL}/photos/random?query=food&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
        );
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
            throw new Error(data.errors.join(', '));
        }
        return data.urls.regular;
    } catch (error) {
        console.error(error);
        return null;
    }
}

