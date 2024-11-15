const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;

export async function getBearer() {
  
    const token_url = `https://accounts.spotify.com/api/token`;
    const res = await fetch(token_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
       },
      body: new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': client_id,
        'client_secret': client_secret
      })
    });
    return res.json()
  }


