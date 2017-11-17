var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
});

var binding = new Vue({
	el: '#binding',
	data: {
		message: 'You loaded this page on ' + new Date().toLocaleString()
	}
});

var loop = new Vue({
	el: '#looping',
	data: {
		list: [{
			name: 'Bananas',
			price: '$2.20'
		},
		{
			name: 'Red Pepper',
			price: '$1.39'
		},
		{
			name: 'Carrots',
			price: '$3.05'
		}]
	}
});

var input = new Vue({
	el:'#userInput',
	data: {
		message: 'dracula'
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
});

var input = new Vue({
	el:'#model',
	data: {
		message: 'Hello Vue!'
	}
});

var todoComponent = new Vue({
	el: '#component1',
	data: {
		groceryList: [
		{
			id: 0,
			text: 'Vegetables'
		},
		{
			id: 1,
			text: 'Cheese'
		},
		{
			id: 2,
			text: 'Other stuff'
		}]
	}
});