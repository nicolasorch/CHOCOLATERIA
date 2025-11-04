import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  marketing_consent: boolean;
};

export async function submitLead(payload: LeadPayload) {
  const response = await apiClient.post("/leads", payload);
  return response.data;
}
