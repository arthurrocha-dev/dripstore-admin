"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";
import axios from "axios";
import Cookies from "js-cookie";

export const API_URL = "http://localhost:3000/api";

const authData = Cookies.get("auth");
const token = authData ? JSON.parse(authData).token : null;

const headers = {
  "Content-Type": "application/json",
};

if (token) {
  // @ts-ignore
  headers.Authorization = `Bearer ${token}`;
}

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers,
});

export const dataProvider = dataProviderSimpleRest(API_URL, axiosInstance);
