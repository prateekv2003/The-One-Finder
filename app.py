from collections import Counter
x = Counter()
y = [i for i in range(1, 31)]
print(y)

d = [{label: 'Writing', value: 'Writing'},
     {label: 'Photography', value: 'Photography'},
     {label: 'Singing', value: 'Singing'},
     {label: 'Badminton', value: 'Badminton'},
     {label: 'Cricket', value: 'Cricket'},
     {label: 'Dancing', value: 'Dancing'},
     {label: 'Mountains', value: 'Mountains'},
     {label: 'Open', value: 'Open-Minded'},
     {label: 'Gym', value: 'Gym'},
     {label: 'Art & Craft', value: 'Art & Craft'},
     {label: 'Biryani', value: 'Biryani'},
     {label: 'Romance', value: 'Romance'},
     {label: 'Cooking', value: 'Cooking'},
     {label: 'Romantic', value: 'Romantic'},
     {label: 'Tea', value: 'Tea'},
     {label: 'Foodie', value: 'Foodie'},
     {label: 'Cycling', value: 'Cycling'},
     {label: 'Coffee', value: 'Coffee'},
     {label: 'Football', value: 'Football'},
     {label: 'Reels', value: 'Reels'},
     {label: 'Design', value: 'Design'},
     {label: 'Running', value: 'Running'},
     {label: 'Swimming', value: 'Swimming'},
     {label: 'Festivals', value: 'Festivals'},
     {label: 'Poetry', value: 'Poetry'},
     {label: 'Dogs', value: 'Dogs'},
     {label: 'Cafe', value: 'Cafe'},
     {label: 'Camping', value: 'Camping'},
     {label: 'Beer', value: 'Beer'},
     {label: 'Comedy', value: 'Comedy'},
     {label: 'Basketball', value: 'Basketball'},
     {label: 'Yoga', value: 'Yoga'},
     {label: 'Vegetarian', value: 'Vegetarian'},
     {label: 'Bollywood', value: 'Bollywood'},
     {label: 'Stand Up', value: 'Stand Up'},
     {label: 'Anime', value: 'Anime'},
     {label: 'Thriller', value: 'Thriller'},
     {label: 'Ambitions', value: 'Ambitions'},
     {label: 'Theatre', value: 'Theatre'},
     {label: 'Concerts', value: 'Concerts'}]

for i, a in enumerate(d):
    x[i] = a

print(x)
