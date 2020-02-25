var db = firebase.firestore()

var ui = new firebaseui.auth.AuthUI(firebase.auth())

var counterRef = db.collection("counters").doc("mainCounter")

var count = 0

$('#signin').on('click', () => {
	ui.start('#firebaseui-auth-container', {
		signInSuccessUrl: 'https://fir-demo-9ac53.firebaseapp.com/counter.html',
		signInOptions: [
			firebase.auth.EmailAuthProvider.PROVIDER_ID
		]
	})
})

counterRef.onSnapshot((doc) => {
	count = doc.data().value
	$("#counter").text(count)
})

$('#increment').on('click', () => {
	counterRef.update({
		value: count + 1
	})
})

$('#decrement').on('click', () => {
	counterRef.update({
		value: count - 1
	})
})
