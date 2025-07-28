import axios, { AxiosRequestConfig } from "axios";

import config from "../config/config";
// import cookieHelper from "../utils/cookieHelper";

const http = axios.create({
  baseURL: config.apiUrl,
});

// http.interceptors.request.use(
//   (config: InternalAxiosRequestConfig<void>) => {
//     const token = cookieHelper.getCookie("access_token");
//     config.headers = config.headers || {};
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// --- Auth ---

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

// --- Admin/Blog ---
export const getBlogList = async (page: number): Promise<unknown> => {
  return http.get(`/api/v1/admin/blogs?page=${page}`);
};

export const getBlogDetail = async (id: number): Promise<unknown> => {
  return http.get(`/api/v1/admin/blogs/${id}`);
};

export const addBlog = async (blogData: {
  title: string;
  content: string;
  thumbnailPath: string;
  description: string;
  keywords: string[];
}): Promise<unknown> => {
  return http.post("/api/v1/admin/blogs", blogData);
};

export const editBlog = async (
  id: number,
  blogData: {
    title: string;
    content: string;
    thumbnailPath: string;
    description: string;
    keywords: string[];
    status: string | null;
  }
): Promise<unknown> => {
  return http.patch(`/api/v1/admin/blogs/${id}`, blogData);
};

export const deleteBlog = async (id: number): Promise<void> => {
  await http.delete(`/api/v1/admin/blogs/${id}`);
};
// --- Admin/Blog EndPoint ---

// --- Admin/Portfolio ---
export const getPortfolioList = async (page: number): Promise<unknown> => {
  return http.get(`/api/v1/admin/portfolios?page=${page}`);
};

export const getPortfolioDetail = async (id: number): Promise<unknown> => {
  return http.get(`/api/v1/admin/portfolios/${id}`);
};

export const addPortfolio = async (portfolioData: {
  title: string;
  content: string;
  thumbnailPath: string;
}): Promise<unknown> => {
  return http.post("/api/v1/admin/portfolios", portfolioData);
};

export const editPortfolio = async (
  id: number,
  portfolioData: {
    title: string;
    content: string;
    thumbnailPath: string;
  }
): Promise<unknown> => {
  return http.patch(`/api/v1/admin/portfolios/${id}`, portfolioData);
};

export const deletePortfolio = async (id: number): Promise<unknown> => {
  return http.delete(`/api/v1/admin/portfolios/${id}`);
};

// --- Admin/Portfolio EndPoint ---

// --- Admin/Inquiries ---

export const getInquiries = async (page: number): Promise<unknown> => {
  return http.get(`/api/v1/admin/inquiries?page=${page}`);
};

export const getInquiriesDetail = async (id: number): Promise<unknown> => {
  return http.get(`/api/v1/admin/inquiries/${id}`);
};

export const addAnswer = async (
  id: number,
  answerData: { response: string }
): Promise<unknown> => {
  return http.patch(`/api/v1/admin/inquiries/${id}/answer`, answerData);
};

export const getInquiriesSelectList = async (): Promise<unknown> => {
  return http.get("/api/v1/inquiries/form");
};

export const getInquiryFileDownload = async (
  path: string,
  fn: string
): Promise<unknown> => {
  return http.get(`/api/v1/admin/files/inquiries/${path}`, {
    params: { fn },
    responseType: "blob",
  });
};

// --- Admin/Inquiries EndPoint ---

// --- Unsaenara/Columns ---
export const addColumns = async (columnData: {
  title: string;
  content: string;
  thumbnailPath: string;
  description: string;
  keywords: string[];
}): Promise<unknown> => {
  return http.post("/api/v1/admin/unsaenara/columns", columnData);
};

export const getColumnList = async (page: number): Promise<unknown> => {
  return http.get(`/api/v1/admin/unsaenara/columns?page=${page}`);
};

export const getColumnDetail = async (id: number): Promise<unknown> => {
  return http.get(`/api/v1/admin/unsaenara/columns/${id}`);
};

export const editColumns = async (
  id: number,
  columnData: {
    title: string;
    content: string;
    thumbnailPath: string;
    description: string;
    keywords: string[];
  }
): Promise<unknown> => {
  return http.patch(`/api/v1/admin/unsaenara/columns/${id}`, columnData);
};

export const deleteColumns = async (id: number): Promise<unknown> => {
  return http.delete(`/api/v1/admin/unsaenara/columns/${id}`);
};
// --- Unsaenara/Columns EndPoint ---

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
