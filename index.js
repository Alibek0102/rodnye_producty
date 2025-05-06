import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world111');
});

app.listen(3000, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server starts OK');
}
);