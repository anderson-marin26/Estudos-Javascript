'use strict';

class Cat
{
	constructor(name, color)
	{
		this.name = name
		this.color = color
	}

	speak()
	{
		display('Meow')
	}
}

var dog = {
	name: {
		first: 'dogo',
		last: 'bamboozled'
	},
	color: 'black'
}

/*
** With enumerable false you cannot iterate on a for loop or serialize or see the key
*/
Object.defineProperty(dog, 'name', {enumerable: false})

display(Object.keys(dog))

// loops
for (var propertyName in dog)
{
	display(propertyName + ': ' + dog[propertyName])
}

/*
** Setters and Getters
*/
Object.defineProperty(dog, 'fullName',
{
	get: function()	
	{
		return this.name.first + ' ' + this.name.last
	},

	set: function(value)
	{
		var nameParts = value.split(' ')
		this.name.first = nameParts[0]
		this.name.last = nameParts[1]
	}
})

display('Using getter to show name: ')
display(dog.fullName)

dog.fullName = 'DOGO SUPREME'
display('Set dogo name using setter')
display(dog.fullName)