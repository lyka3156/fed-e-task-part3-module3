import { request } from "@/plugins/request";

// 1. 关注用户
export const followUser = (username) => {
  return request({
    method: "POST",
    url: `/api/profiles/${username}/follow`,
  });
};

// 2. 取消关注用户
export const unFollowUser = (username) => {
  return request({
    method: "DELETE",
    url: `/api/profiles/${username}/follow`,
  });
};
