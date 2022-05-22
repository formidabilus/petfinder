import axios from "axios";

export const getAnimals = async (accessToken, setAnimals) => {
  try {
    const response = await axios.get("/animals", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    setAnimals(response);
    console.log(response);
  } catch (err) {
    if (err.response) {
      // Not in the 200 response range
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};
