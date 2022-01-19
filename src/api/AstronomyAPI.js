import { MOCK_DATA } from './mock';
// const API_KEY = process.env.REACT_APP_API_KEY;

let LIKE_MAP;

const updateLikes = () => {
	const mapString = JSON.stringify(Array.from(LIKE_MAP.entries()));
	window.localStorage.setItem('likes', mapString);
};

export const loadLikes = () => {
	const mapString = window.localStorage.getItem('likes');
	if (mapString) {
		LIKE_MAP = new Map(JSON.parse(mapString));
	} else {
		LIKE_MAP = new Map();
	}
};

export const setLike = (date) => {
	if (!LIKE_MAP) return;
	LIKE_MAP.set(date, 1);
	updateLikes();
};

export const removeLike = (date) => {
	if (!LIKE_MAP) return;
	LIKE_MAP.delete(date);
	updateLikes();
};

export const isLiked = (date) => {
	if (!LIKE_MAP) return false;
	return LIKE_MAP.get(date) !== undefined;
};
