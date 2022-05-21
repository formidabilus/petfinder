export const fetchAccessToken = (setAccessToken) =>
  fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      process.env.REACT_APP_PETFINDER_API_KEY +
      "&client_secret=" +
      process.env.REACT_APP_PETFINDER_SECRET,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(function (resp) {
      // Return the response as JSON
      return resp.json();
    })
    .then(function (data) {
      // Log the API data
      console.log("token", data);
      //set access token
      setAccessToken(data.access_token);
    })
    .catch(function (err) {
      // Log any errors
      console.log("something went wrong", err);
    });
