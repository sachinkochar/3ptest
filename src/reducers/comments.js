import { 
	getCommentsSuccess,
    getCommentsFailure
  } from '../actions/comments-action';

const initialState = {
	 users:[],
	 fetched:false,
	 error:{}
}
export default function commentsReducer(state = initialState, {type,payload}) {
	switch(type){
	 case getCommentsSuccess :
		return {
			...state,
			fetched:true,
			users:payload
		}
	 case getCommentsFailure :
		return {
			...state,
			fetched:false,
			error:payload
		}
	 default :
	    return state;
    }
}