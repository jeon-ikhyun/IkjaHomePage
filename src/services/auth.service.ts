import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

// 承認サービス
class AuthService {
  // ログイン
  // username:ユーザー名
  // password:パスワード
  login(username: string, password: string) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  // ログアウト
  logout() {
    localStorage.removeItem("user");
  }

  // ユーザー登録
  // username:ユーザー名
  // password:パスワード
  register(username: string, password: string) {
    return axios.post(API_URL + "signup", {
      username,
      password,
    });
  }

  // 現在ユーザー取得
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }
}

export default new AuthService();
