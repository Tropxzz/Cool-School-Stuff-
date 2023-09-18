#The Mad Libs Generator gathers and manipulates user input data as an adjective, a pronoun, and a verb. The program takes this data and arranges it to build a story.


# Questions for the user to answer

noun = input('Choose a noun: ')

p_noun = input('Choose a plural noun: ')

noun2 = input('Choose a noun: ')

place = input('Name a place: ')

adjective = input('Choose an adjective (Describing word): ')

noun3 = input('Choose a noun: ')

# Print a story from the user input

print('------------------------------------------')

print('Be kind to your', noun, '- footed', p_noun)

print('For a duck may be somebody\'s', noun2, ',')

print('Be kind to your', p_noun, 'in', place)

print('Where the weather is always', adjective, '. \n')

print('You may think that is this the', noun3, ',')

print('Well it is.')

print('------------------------------------------')
