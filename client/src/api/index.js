import axios from 'axios';

const nodeUrl = 'http://localhost:5000/posts';
const pythonUrl = 'http://localhost:8000/playground/vectorize/'

export const fetchPosts = () => axios.get(nodeUrl);
export const createPost = (newPost) => axios.post(nodeUrl, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${nodeUrl}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${nodeUrl}/${id}`);
export const likePost = (id) => axios.patch(`${nodeUrl}/${id}/likePost`);
export const vectorizeInput = (post) => axios.post(pythonUrl, post);