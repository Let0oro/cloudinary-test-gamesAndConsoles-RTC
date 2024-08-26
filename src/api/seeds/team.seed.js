const newTeamSeed = {
  name: "Italians",
  coach: "Rabandez",
  foundedYear: 1893,
  description:
    "The all live footbal team, from your grandparents to your sons.",
  category: "AAA",
};

const generateSeed = async () => {
  const data = await fetch("http://localhost:3000/api/teams/", {
    credentials: "include",
  });
  const body = await data.json();

  if (!body.length) {
    const response = await fetch("http://localhost:3000/api/teams/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newTeamSeed),
    });

    console.log({ response });

    if (response.ok) {
      console.log("Succesfull saved");
      const responseOk = await response.json();
      console.log(responseOk.message);
    } else {
      console.log("Fatal error during saved");
      const responseError = await response.json();
      console.error(responseError);
    }
  }
};

module.exports = generateSeed;
