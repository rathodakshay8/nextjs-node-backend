import express from 'express';
import supabase from './db.js'; 

const app = express();
app.use(express.json());

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from Node.js Backend!", timestamp: new Date() });
});
app.post("/add-user", async (req, res) => {
  const { name, email } = req.body;
  const { data, error } = await supabase.from("users").insert([{ name, email }]);

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "User added successfully!", data });
});


app.get("/users", async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");

  if (error) return res.status(500).json({ error: error.message });

  res.json({ users: data });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
