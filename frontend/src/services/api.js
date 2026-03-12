import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message || error?.message || "Request failed";
    return Promise.reject(new Error(message));
  },
);

const request = async (config) => (await http(config)).data;

export const api = {
  getPublicContent: () => request({ url: "/content", method: "GET" }),
  getPublicSection: (sectionKey) =>
    request({ url: `/content/${sectionKey}`, method: "GET" }),
  login: (payload) =>
    request({ url: "/auth/login", method: "POST", data: payload }),
  register: (payload) =>
    request({ url: "/auth/register", method: "POST", data: payload }),
  userRegister: (payload) =>
    request({ url: "/auth/user/register", method: "POST", data: payload }),
  userLogin: (payload) =>
    request({ url: "/auth/user/login", method: "POST", data: payload }),
  submitContact: (payload) =>
    request({ url: "/public/contact", method: "POST", data: payload }),
  getTestimonials: () => request({ url: "/public/testimonials", method: "GET" }),
  submitTestimonial: (payload) =>
    request({ url: "/public/testimonials", method: "POST", data: payload }),
  getSeo: (pageKey) => request({ url: `/public/seo/${pageKey}`, method: "GET" }),
  trackPageView: (payload) =>
    request({ url: "/public/analytics/pageview", method: "POST", data: payload }),
  getAdminContent: () => request({ url: "/admin/content", method: "GET" }),
  updateSection: (sectionKey, data) =>
    request({
      url: `/admin/content/${sectionKey}`,
      method: "PUT",
      data: { data },
    }),
  getContacts: () => request({ url: "/admin/contacts", method: "GET" }),
  getEnquiries: () => request({ url: "/admin/enquiries", method: "GET" }),
  getAdminTestimonials: () =>
    request({ url: "/admin/testimonials", method: "GET" }),
  addTestimonial: (payload) =>
    request({ url: "/admin/testimonials", method: "POST", data: payload }),
  updateTestimonial: (id, payload) =>
    request({ url: `/admin/testimonials/${id}`, method: "PUT", data: payload }),
  deleteTestimonial: (id) =>
    request({ url: `/admin/testimonials/${id}`, method: "DELETE" }),
  getAdminSeo: (pageKey) =>
    request({ url: `/admin/seo/${pageKey}`, method: "GET" }),
  saveAdminSeo: (pageKey, payload) =>
    request({ url: `/admin/seo/${pageKey}`, method: "PUT", data: payload }),
  getAnalyticsSummary: () =>
    request({ url: "/admin/analytics/summary", method: "GET" }),
  getAdmins: () => request({ url: "/admin/admins", method: "GET" }),
  saveSubadmin: (payload) =>
    request({ url: "/admin/admins/subadmin", method: "POST", data: payload }),
};

export function setAdminSession(token, admin) {
  localStorage.setItem("admin_token", token);
  localStorage.setItem("admin_user", JSON.stringify(admin));
}

export function clearAdminSession() {
  localStorage.removeItem("admin_token");
  localStorage.removeItem("admin_user");
}

export function getAdminSession() {
  const token = localStorage.getItem("admin_token");
  const rawUser = localStorage.getItem("admin_user");
  return {
    token,
    user: rawUser ? JSON.parse(rawUser) : null,
  };
}
