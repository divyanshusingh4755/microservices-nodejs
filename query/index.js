const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const posts = {};
// QUICK EXAMPLE
// posts === {
// '12345' : {
//     id: '12345',
//     title: 'post title',
//     comments: [
//         {id: '23456', content: "comment"}
//        ]
//     }
// }

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.post("/events", (req, res) => {
    const { type, data } = req.body;

    if (type === "PostCreated") {
        const { id, title } = data;

        posts[id] = { id, title, comments: [] };
    }

    if (type === "CommentCreated") {
        const { id, content, postId } = data;
        const post = posts[postId];
        post.comments.push({ id, content });
    }

    res.send({});
})

app.listen(5002, () => {
    console.log("listening on port 5002")
})