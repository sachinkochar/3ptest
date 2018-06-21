
export const getCommentsSuccess = payload => ({
  type: getCommentsSuccess,
  payload
});

export const getCommentsFailure = payload => ({
  type: getCommentsFailure,
  payload
});

export const getComments = () => dispatch =>  {
      return dispatch(getCommentsSuccess());
}

export const addComments = (data) => {dispatch =>  {
	console.log(data)
      return dispatch(getCommentsSuccess());}
}