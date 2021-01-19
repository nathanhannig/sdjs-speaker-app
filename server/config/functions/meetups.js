const axios = require('axios');

module.exports = async () => {
  return new Promise((resolve, reject) => {
		let currentDate = new Date();
		currentDate.setMonth(currentDate.getMonth() + 3);
		const date = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
		axios.get(`https://api.meetup.com/sandiegojs/events?no_later_than=${date}`)
		.then( response => resolve(response.data.map(event => ({
			meetupId: event.id,
			name: event.name,
			date: event.local_date,
			time: event.local_time,
			venue: event.venue,
			link: event.link,
			description: event.description,
		}))))
		.catch(err => reject(new Error('getMeetups failed to get SDJS meetups')))
	})
};
