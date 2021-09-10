export const CHANGE_PAGE = "CHANGE_PAGE";


export const changePage = (page: string) => ({
  type: CHANGE_PAGE,
  payload: page
})