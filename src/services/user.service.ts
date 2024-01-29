/*
 * @Author: jack ning github@bytedesk.com
 * @Date: 2024-01-29 11:50:09
 * @LastEditors: jack ning github@bytedesk.com
 * @LastEditTime: 2024-01-29 11:53:05
 * @FilePath: /react-typescript-authentication-example/src/services/user.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:1001/api/test/";

export const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

export const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

export const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
