import axios from 'axios';

export const sendEmail = (data)=>{
	return new Promise((resolve, eject )=>{
		const dataResponse = axios.post(`https://us-central1-integra-oikonomos.cloudfunctions.net/sendMail`, data);
		resolve(dataResponse);
	})
}