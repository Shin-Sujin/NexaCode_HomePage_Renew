import axios from "axios";

import config from "../config/config";

const http = axios.create({
  baseURL: config.apiUrl,
});

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

// --- Public/Inquiries ---
export const registerInquiry = async (
  data: Record<string, unknown>
): Promise<unknown> => {
  return http.post("/api/v1/inquiries", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const fetchInquiryList = async (page: number): Promise<unknown> => {
  const params: Record<string, unknown> = { page };
  return http.get("/api/v1/inquiries", { params });
};

export const fetchInquiryDetail = async (id: number): Promise<unknown> => {
  return http.get(`/api/v1/inquiries/${id}`);
};

export const fetchPortfolios = async (page: number = 1): Promise<unknown> => {
  const params: Record<string, unknown> = { page };
  return http.get("/api/v1/portfolios", { params });
};

export const fetchPortfolioDetail = async (id: number): Promise<unknown> => {
  return http.get(`/api/v1/portfolios/${id}`);
};
