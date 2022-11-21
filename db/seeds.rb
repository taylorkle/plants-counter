User.destroy_by(email: "Amy@gmail.com")
User.destroy_by(email: "Mike@gmail.com")

user_1 = User.create!(first_name: "Mike", email: "Mike@gmail.com", password: "foodie2", plant_goal: 25)
user_2 = User.create!(first_name: "Amy" , email: "Amy@gmail.com", password: "plants2", plant_goal: 20)

apple = Plant.find_or_create_by!(name: "Apple", api_id: 9003, image: "apple.jpg")
carrot = Plant.find_or_create_by!(name: "Carrot", api_id: 11124, image: "sliced-carrot.png")
kiwi = Plant.find_or_create_by!(name: "Kiwi", api_id: 9148, image: "kiwi.png")
cabbage = Plant.find_or_create_by!(name: "Cabbage", api_id: 11109, image: "cabbage.jpg")
almonds =Plant.find_or_create_by!(name: "Almonds", api_id: 12061, image: "almonds.jpg")
buckwheat = Plant.find_or_create_by!(name: "Buckwheat", api_id: 20008, image: "raw-buckwheat.jpg")
basil = Plant.find_or_create_by!(name: "Fresh basil", api_id: 2044, image: "fresh-basil.jpg")
quinoa = Plant.find_or_create_by!(name: "Quinoa", api_id: 20035, image: "uncooked-quinoa.png")
pecans = Plant.find_or_create_by!(name: "Pecans", api_id: 12142, image: "pecans.jpg")
banana = Plant.find_or_create_by!(name: "Banana", api_id: 9040, image: "bananas.jpg")
cucumber = Plant.find_or_create_by!(name: "Cucumber", api_id: 11206, image: "cucumber.jpg")
pineapple = Plant.find_or_create_by!(name: "Pineapple", api_id: 9266, image: "pineapple.jpg")
sesame = Plant.find_or_create_by!(name: "Sesame seeds", api_id: 12023, image: "sesame-seeds.png")
cilantro = Plant.find_or_create_by!(name: "Cilantro", api_id: 11165, image: "cilantro.png")
muskmelon = Plant.find_or_create_by!(name: "Muskmelon", api_id: 98936, image: "cantaloupe.png")
zucchini = Plant.find_or_create_by!(name: "Zucchini", api_id: 11477, image: "zucchini.jpg")
kale = Plant.find_or_create_by!(name: "Kale", api_id: 11233, image: "kale.jpg")
spinach = Plant.find_or_create_by!(name: "Spinach", api_id: 10011457, image: "spinach.jpg")
pear = Plant.find_or_create_by!(name: "Pear", api_id: 9252, image: "pears-bosc.jpg")
oats = Plant.find_or_create_by!(name: "Rolled oats", api_id: 8120, image: "rolled-oats.jpg")

entry_1 = PlantEntry.find_or_create_by!(plant: apple, user: user_1)
entry_2 = PlantEntry.find_or_create_by!(plant: carrot, user: user_1)
entry_3 = PlantEntry.find_or_create_by!(plant: kiwi, user: user_1)
entry_4 = PlantEntry.find_or_create_by!(plant: cabbage, user: user_1)
entry_5 = PlantEntry.find_or_create_by!(plant: almonds, user: user_1)
entry_6 = PlantEntry.find_or_create_by!(plant: buckwheat, user: user_1)
entry_7 = PlantEntry.find_or_create_by!(plant: basil, user: user_1)
entry_8 = PlantEntry.find_or_create_by!(plant: quinoa, user: user_1)
entry_9 = PlantEntry.find_or_create_by!(plant: pecans, user: user_1)
entry_10 = PlantEntry.find_or_create_by!(plant: banana, user: user_1)
entry_11 = PlantEntry.find_or_create_by!(plant: pear, user: user_1)
entry_12 = PlantEntry.find_or_create_by!(plant: spinach, user: user_1)
entry_13 = PlantEntry.find_or_create_by!(plant: cucumber, user: user_2)
entry_14 = PlantEntry.find_or_create_by!(plant: pineapple, user: user_2)
entry_15 = PlantEntry.find_or_create_by!(plant: sesame, user: user_2)
entry_16 = PlantEntry.find_or_create_by!(plant: cilantro, user: user_2)
entry_17 = PlantEntry.find_or_create_by!(plant: muskmelon, user: user_2)
entry_18 = PlantEntry.find_or_create_by!(plant: zucchini, user: user_2)
entry_19 = PlantEntry.find_or_create_by!(plant: kale, user: user_2)
entry_20 = PlantEntry.find_or_create_by!(plant: oats, user: user_2)