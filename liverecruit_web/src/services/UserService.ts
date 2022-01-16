import axios from "axios";

const addUser = async (email: string) => {
  // make api call

  try {
    const response = await axios.post("http://localhost:4000/users", {
      email,
    });

    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export { addUser };
