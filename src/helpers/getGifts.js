export const  getGifts = async(category) => {
    const url= `https://api.giphy.com/v1/gifs/search?api_key=f2ycMojOTPCEjshzODexAvBZ2fe1BvCA&q=${category}&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifts = data.map( img =>({
      id:img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    return gifts;
  }