export const getGifs = async (category) => {
    //EncodeURI() para reemplazar espacios por %20 etc..
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=LxzDBqzWtYTqkXAAHIuwddiJYtpZ7sDF`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //colocar ? para que lo haga solo si viene la seccion images
        }
    });

    return gifs;
};