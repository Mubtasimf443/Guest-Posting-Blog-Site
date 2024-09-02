/*  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  */


export const usePost = async (url,obj) => {
  let BaseUrl = ''
  let response = await fetch(BaseUrl+  url, {
    method:'POST',
    mode: 'cors',
    body : obj, 
    headers : {
      'Content-Type' : 'application/json'
    }
  })
  response = await response.json;
  return response 
  
}














