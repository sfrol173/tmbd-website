import {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {actionFetchTvPage} from "../../store/slices/tv.slice.js";
import {selectorTvPage} from "../../store/selectors.js";


const TvPage = () => {
	const dispatch = useDispatch()
	const {id} = useParams()
	
	const dataPage = useSelector(selectorTvPage)
	
	console.log('dataPage',dataPage);
	
	useEffect(() => {
		dispatch(actionFetchTvPage(id))
	}, [])
	
	
	return (
		<div>
		
		</div>
	)
}

export default TvPage