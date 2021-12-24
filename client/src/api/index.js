import axios from 'axios';

const nodeUrl = 'http://localhost:5000/posts';
const pythonUrl = 'http://localhost:8000/playground';

export const fetchPosts = () => axios.get(nodeUrl);
export const createPost = (newPost) => axios.post(nodeUrl, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${nodeUrl}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${nodeUrl}/${id}`);
export const likePost = (id) => axios.patch(`${nodeUrl}/${id}/likePost`);
export const vectorizeInput = (post) => axios.post(`${pythonUrl}/vectorize/`, post);
export const analyzeSentiment = (inputText) => axios.post(`${pythonUrl}/sentiment/`, inputText);
export const embedSentence = (inputText) => axios.post(`${pythonUrl}/embed/`, inputText);
export const umap = (neighbors, distance) => axios.post(`${pythonUrl}/umap/`, {
    n_neighbors: neighbors,
    min_distance: distance
});