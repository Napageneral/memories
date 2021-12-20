import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
import http from 'http';
const python_hostname = 'localhost';
const python_port = '8000'
const python_path = '/playground/vectorize/'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const vectorizeMessage = async (req, res) => {
    const options = {
      hostname: python_hostname,
      port: python_port,
      path: python_path,
      method: 'GET'
    }
    
    var req = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        //console.log('HEADERS: ' + JSON.stringify(res.headers));
      
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        res.on('data', function(chunk) {
          // You can process streamed parts here...
          bodyChunks.push(chunk);
        }).on('end', function() {
          var body = Buffer.concat(bodyChunks);
          console.log('BODY: ' + body);
          res.json(body)
          // ...and/or process the entire body here.
        })
      });
      
      req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
      });

      req.end()

}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        // https://www.restapitutorial.com/httpstatuscodes.html

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

export const updatePost = async (req, res) => {
    const post = req.body;
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    res.json(updatedPost);
};

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(_id);

    res.json({message: "Post deleted successfully"});
};

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, {new: true})

    res.json(updatedPost);
};
