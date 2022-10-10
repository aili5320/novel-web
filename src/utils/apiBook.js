import axios from "../utils/http"

// 新增小说
export function addBook(bookInfo){
  return axios.post("/novel/addBook",bookInfo)
}

// 查询小说详情信息
export function queryBooks(queryInfo){
  return axios.post("/novel/queryBooks",queryInfo)
}

// 查询小说
export function queryBookInfo(queryInfo){
  return axios.post("/novel/queryBookInfo",queryInfo)
} 

//修改小说
export function editBook(bookInfo){
  return axios.post("/novel/editBook",bookInfo)
} 

//新增章节
export function addChapter(chapterInfo) {
  return axios.post("/novel/addChapter",chapterInfo)
}

//获取章节列表
export function getChapterList(bookIdInfo){
  return axios.post("/novel/getChapterList",bookIdInfo)
}
//获取章节详情信息
export function queryChapter(chapterId){
  return axios.post("/novel/queryChapter",chapterId)
}

//修改章节详情信息
export function updateChapter(chapterInfo){
  return axios.post("/novel/updateChapter",chapterInfo)
}

//删除章节
export function deteleChapter(chapterInfo){
  return axios.post("/novel/deteleChapter",chapterInfo)
}


//获取图书列表
export function queryBookList(chapterInfo){
  return axios.post("/novel/queryBookList",chapterInfo)
}


//获取章节内容 
export function queryChapterByBookId(chapterInfo){
  return axios.post("/novel/queryChapterByBookId",chapterInfo)
}

//章节翻页
export function chapterPage(pageInfo){
  return axios.post("/novel/chapterPage",pageInfo)
}

//新增章节评论
export function addForum(forumInfo) {
  return axios.post("/novel/addForum",forumInfo)
}

//根据章节ID查询用户评论
export function queryForumByChapterId(forumInfo) {
  return axios.post("/novel/queryForumByChapterId",forumInfo)
}


//根据小说ID查询用户评论
export function queryForumByBookId(forumInfo) {
  return axios.post("/novel/queryForumByBookId",forumInfo)
}

//根据小说ID查询用户评论
export function queryForumByUserId(userInfo) {
  return axios.post("/novel/queryForumByUserId",userInfo)
}

//根据评论ID删除该评论
export function delForumById(forumfo) {
  return axios.post("/novel/delForumById",forumfo)
}






