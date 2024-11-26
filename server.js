const express = require('express')
const axios = require('axios').default;
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json());
app.use(cors())

const api_key = '1034816-DevApp-DE8C8CC2';

app.post('/search', async (req, res) => {
  const query = req.body.query;

  try {
    const response = await axios.get(`https://tastedive.com/api/similar?q=${query}&type=music&info=1&slimit=3&limit=10&k=${api_key}`, {
      headers: {
        'Authorization': `${api_key}`
      }
    });
    const data = response.data.similar;
    res.json(data)
  } catch (error) {
    console.error(error);
  }
})

app.get('/get', async (req, res) => {
  try {
    const response = await axios.get(`https://tastedive.com/api/similar?q=avicii&type=music&info=1&slimit=3&limit=5&k=${api_key}`, {
      headers: {
        'Authorization': `${api_key}`
      }
    });
    const data = response.data.similar.results;
    res.json(data)
  } catch (error) {
    console.error(error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

