class PlantCounter

  HERB_LIST =  ["allspice"," angelica", "anise", "asafoetida", "bay leaves", "fresh basil", "bergamot", "caraway", "cardamom", "cayenne pepper", "celery seed", "chervil", "chicory", "chili pepper", "chives", "cilantro", "cinnamon", "clove", "coriander", "cumin", "curry", "dill", "fennel", "fenugreek", "filé", "ginger", "horseradish", "hyssop", "lavender", "lemon balm", "lemon grass", "lemon verbena", "marjoram", "nutmeg", "oregano", "paprika", "parsley", "peppermint", "poppy seeds", "rosemary", "saffron", "sage", "savory",  "sesame, sorrel", "star anise", "spearmint", "tarragon", "thyme", "turmeric", "vanilla", "wasabi", "yellow mustard seeds"]

  def self.plant_count(user_plant_array)
    herb_count = count_herbs(user_plant_array)
    return (user_plant_array.length - herb_count + herb_count * 0.25).round(2)
  end

  private

  def self.count_herbs(user_plant_array)
    count = 0
    user_plant_array.each do |plant|
      if HERB_LIST.include?(plant["name"].downcase)
        count += 1
      end
    end
    return count
  end

end

