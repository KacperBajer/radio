'use server'

let usr = 'root'
let pass = 'ZAQ12wsx@#'

export const getSongsReq = async (url) => {
    let headers = new Headers();
    headers.set("Authorization", 'Basic ' + btoa(usr + ":" + pass));
    const response = await fetch(
      `https://radiowezel.peciak.xyz/search/${url}`,
      {
        method: "GET",
        mode: "no-cors",
        headers: headers,
      }
    )
    
    const result = await response.json()
    return result
} 



export const addSongReq = async (item) => {
    let headers = new Headers();
    headers.set("Authorization", 'Basic ' + btoa(usr + ":" + pass));
    headers.set("Content-Type", 'application/json')
    const response = await fetch(
      `https://radiowezel.peciak.xyz/queue`,
      {
        method: "POST",
        mode: "no-cors",
        headers: headers,
        body:  JSON.stringify({
            uri: item.uri,
            service: item.service,
            albumart: item.albumart,
            artist: item.artist,
            title: item.title,
            duration: item.duration,
            break: 1,
            priority: 1,
        })
      },

    )
    
    const result = await response.json()
    return result
} 

export const suggestedSongsReq = async () => {
    let headers = new Headers();
    headers.set("Authorization", 'Basic ' + btoa(usr + ":" + pass));
    const response = await fetch(
      `https://radiowezel.peciak.xyz/unaccepted`,
      {
        method: "GET",
        mode: "no-cors",
        headers: headers,
      },

    )
    
    const result = await response.json()
    return result
} 

export const acceptSongReq = async (songId) => {
    let headers = new Headers();
    headers.set("Authorization", 'Basic ' + btoa(usr + ":" + pass));
    headers.set("Content-Type", 'application/json')
    const response = await fetch(
      `https://radiowezel.peciak.xyz/accept`,
      {
        method: "POST",
        mode: "no-cors",
        headers: headers,
        body:  JSON.stringify({
            id: songId
        })
      },

    )
    
    const result = await response.json()
    return result
} 