const handleDate = (req, res) => {
  try {
    let { date } = req.params;
    date = new Date(parseInt(date));

    const utc = date.toUTCString();

    if (utc === "Invalid Date") throw new Error();

    const unix = date.valueOf();

    res.json({ unix, utc });
  } catch (error) {
    res.json({ error: "Invalid Date" });
  }
};

const handleNewDate = (req, res) => {
  const date = new Date();
  const utc = date.toUTCString();
  const unix = date.valueOf();

  res.json({ unix, utc });
};

module.exports = {
  handleDate,
  handleNewDate,
};
