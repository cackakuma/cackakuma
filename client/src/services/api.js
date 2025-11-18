import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getPosts = () => API.get("/api/posts");
export const addPost = (Post) => API.post("/api/posts", Post);
export const updatePost = (id, Post)=> API.put(`/api/posts/${id}`, Post);
export const deletePost = (id) => API.delete(`/api/posts/${id}`);
