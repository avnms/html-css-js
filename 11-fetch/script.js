// GET
// fetch("https://reqres.in/api/users")
//   .then((res) => {
//     if (!res.ok) {
//       console.log("An error occurred!");
//       return;
//     }
//     return res.json();
//   })
//   .then((data) => console.table(data.data[3]))
//   .catch((error) => console.log(error));

// POST
const newUser = {
  name: "Sarma",
  job: "Full Stack Developer",
};

fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
})
  .then((res) => {
    if (!res.ok) {
      console.log("An error occurred!");
      return;
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
