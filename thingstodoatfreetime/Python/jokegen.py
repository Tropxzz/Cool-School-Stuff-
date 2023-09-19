import random

# Create a list of jokes in the format (setup, punchline)
jokes = [

    ("Why did the scarecrow win an award?", "Because he was outstanding in his field!"),
    ("Parallel lines have so much in common.", "It's a shame they'll never meet."),
    ("Why don't scientists trust atoms?", "Because they make up everything!"),
    ("I told my wife she was drawing her eyebrows too high.", "She looked surprised."),
    ("I used to play piano by ear.", "Now I use my hands."),
    ("Why don't skeletons fight each other?", "They don't have the guts."),
    ("I'm reading a book on anti-gravity.", "It's impossible to put down!"),
    ("Why don't oysters donate to charity?", "Because they are shellfish."),
    ("I couldn't figure out how to put my seatbelt on.", "Then it just 'clicked'!"),
    ("What do you call a fish with no eyes?", "Fsh!"),
    ("What is the difference between the twin towers and mcdonalds", "Maccas have a drive-thru, but twin towers have a fly-through."),
    ("I visited my new friend in his apartment. He told me to make myself at home.", "So I threw him out. I hate having visitors."),
    ("Why did the man miss the funeral?", "He wasn’t a mourning person."),
    ("Want to know how you make any salad into a Caesar salad?", "Stab it twenty-three times."),
    ("Why don't some couples go to the gym?", "Because some relationships don't work out."),
    ("I told my wife she was terrible at making puzzles.", "She went to pieces."),
    ("Why did the scarecrow become a successful therapist?", "Because he was outstanding at helping people face their fears."),
    ("I'm on a seafood diet.", "I see food, and I eat it."),
    ("Why did the tomato turn red?", "Because it saw the salad dressing!"),
    ("Why did the bicycle fall over?", "Because it was two-tired!"),
    ('A man walks into the records office and asks to change his name. The clerk is not keen on helping but asks the man and the man replies "MY name is adolf stinkfoot' "The clerk is sympathetic and decides to allow the man to change his unfortunate name. What do you want to change it to asks the clerk, the man replies Maurice Stinkfoot"),
    ("As part of the merger, the PGA will control holes 1-8 and 12-18.", "The Saudis do 9-11."),
    ("Where were most New Zealanders on 9/11?", "9/12.")
    ]

def get_random_joke(jokes_list):
    return random.choice(jokes_list)

if __name__ == "__main__":
    print("Welcome to the Joke Generator!")
    input("Press Enter to get a random joke...")

    while True:
        joke = get_random_joke(jokes)
        print("\nJoke:")
        print(joke[0])
        input("\nPress Enter to reveal the punchline...")
        print(f"Punchline: {joke[1]}")

        play_again = input("\nDo you want to hear another joke? (yes/no): ")
        if play_again.lower() != "yes":
            print("Thanks for playing! Have a great day!")
            break

