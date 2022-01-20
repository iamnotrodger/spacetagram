const API_KEY = process.env.REACT_APP_API_KEY;

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

const TODAY = new Date();

export const getManyAstronomy = async (start = TODAY, end = TODAY) => {
	const url = 'https://api.nasa.gov/planetary/apod';
	const queryString = buildQueryString({
		api_key: API_KEY,
		start_date: dateToString(start),
		end_date: dateToString(end),
		thumbs: 'True',
	});
	const response = await fetch(url + queryString);

	if (!response.ok) throw new Error('unable to query api');

	const astronomyArray = await response.json();
	return astronomyArray;
};

const dateToString = (date) => {
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const buildQueryString = (queryObject) => {
	if (queryObject == null || Object.keys(queryObject).length === 0) {
		return '';
	}

	let queryString = '?';
	for (const [key, value] of Object.entries(queryObject)) {
		queryString += `${key}=${value}&`;
	}

	return queryString.slice(0, -1);
};
