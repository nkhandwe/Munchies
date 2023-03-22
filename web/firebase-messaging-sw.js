importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
	"https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

firebase.initializeApp({
	apiKey: "AIzaSyDBEloEvt-gNffxWTZjqI4Rnq8ewyy8wmg",
	authDomain: "munchies-tanzania01.firebaseapp.com",
	projectId: "munchies-tanzania01",
	storageBucket: "munchies-tanzania01.appspot.com",
	messagingSenderId: "997397296722",
	appId: "1:997397296722:web:e20d6cbd59a0d8691ad18b",
	databaseURL: "...",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
	const promiseChain = clients
		.matchAll({
			type: "window",
			includeUncontrolled: true,
		})
		.then((windowClients) => {
			for (let i = 0; i < windowClients.length; i++) {
				const windowClient = windowClients[i];
				windowClient.postMessage(payload);
			}
		})
		.then(() => {
			const title = payload.notification.title;
			const options = {
				body: payload.notification.score,
			};
			return registration.showNotification(title, options);
		});
	return promiseChain;
});
self.addEventListener("notificationclick", function (event) {
	console.log("notification received: ", event);
});
