"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";

// const API_URL = "https://api.fake-rest.refine.dev";
export const API_URL = "http://localhost:3000/api";

export const dataProvider = dataProviderSimpleRest(API_URL);
