import axios, { AxiosRequestConfig } from "axios";

import config from "../config/config";
// import cookieHelper from "../utils/cookieHelper";

const http = axios.create({
  baseURL: config.apiUrl,
});

export const signIn = async (
  data: Record<string, unknown>,
  encodedCredentials: string,
  params?: AxiosRequestConfig["params"]
) => {
  const headers = {
    Authorization: `Basic ${encodedCredentials}`,
  };

  return http.post("/api/v1/auth/admin/login", data, { params, headers });
};
// --- Auth EndPoint ---

// --- Files ---

export const addThumbnailURL = async (file: File): Promise<unknown> => {
  const formData = new FormData();
  formData.append("file", file);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return http.post("/api/v1/admin/files/temp", formData, config);
};

export const addTagImage = async (file: File): Promise<unknown> => {
  const formData = new FormData();
  formData.append("file", file);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return http.post("/api/v1/admin/files/contents", formData, config);
};

// --- Files EndPoint ---

// // --- Admin/Blog ---
// export const getBlogList = async (page: number): Promise<unknown> => {
//   return http.get(`/api/v1/admin/blogs?page=${page}`);
// };

// export const getBlogDetail = async (id: number): Promise<unknown> => {
//   return http.get(`/api/v1/admin/blogs/${id}`);
// };

// --- Public/Blogs ---
export const fetchPublicBlogs = async (
  page: number,
  search?: string
): Promise<unknown> => {
  const params: Record<string, unknown> = { page };
  if (search) params.search = search;

  return http.get("/api/v1/blogs", { params });
};

export const fetchPublicBlogDetail = async (id: number): Promise<unknown> => {
  return http.get(`/api/v1/blogs/${id}`);
};

export const registerInquiry = async (
  data: Record<string, unknown>
): Promise<unknown> => {
  return http.post("/api/v1/inquiries", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
