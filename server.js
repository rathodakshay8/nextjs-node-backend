const express = require('express');
const supabase = require('./db');

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
