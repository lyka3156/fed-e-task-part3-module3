import { request } from "@/plugins/request";

// 1. 获取公共文章列表
export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}

// 2. 获取你关注的用户的文章列表
// 必须已认证，也就是要传token
export const getYourFavoriteArticle = () => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        // headers: {
        //     // 添加用户身份，数据格式：Token Token数据
        //     Authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTRlNTA3ZTAwYjI1MjhiMmJmZDQwMyIsInVzZXJuYW1lIjoibHlrYTMxNTYiLCJleHAiOjE2MDQ1ODMxNzUsImlhdCI6MTU5OTM5OTE3NX0.8xP0TpSq7U-eNZTWn7akeC5zMXslb6HRrm49M3kQvx0`
        // }
    })
}

// 3. 添加文章点赞
export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`,
    })
}


// 4. 取消文章点赞
export const deleteFavorite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`,
    })
}

// 5. 获取文章详情
export const getAtricleBySlug = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`,
    })
}

// 6. 获取文章评论
export const getComments = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`,
    })
}