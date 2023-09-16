const express = require('express');
const cors = require("cors");
const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  const testData = [
    {
      "name": "Phase 1 Clinical Trial",
      "id": 1
    },
    {
      "name": "Phase 2 Clinical Trial",
      "id": 2
    },
    {
      "name": "Phase 3 Clinical Trial",
      "id": 3
    }
  ];
  

  res.json(testData);
  console.log("sent response!");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});