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

var cat = new Cat('Minerva', 'White')

display(cat)
cat.speak()