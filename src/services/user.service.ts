import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

// ユーザーサービス
class UserService {
  // 共通コンテンツ取得
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  // ユーザー掲示板取得
  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  // モデレータ掲示板取得
  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  // 管理者掲示板取得
  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
