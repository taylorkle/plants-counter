class HerbCounter

  def self.return_herbs
    return ["allspice"," angelica", "anise", "asafoetida", "bay leaf", "basil", "bergamot", "caraway", "cardamom", "cayenne pepper", "celery seed", "chervil", "chicory", "chili pepper", "chives", "cilantro", "cinnamon", "clove", "coriander", "cumin", "curry", "dill", "fennel", "fenugreek", "filé", "ginger", "horseradish", "hyssop", "lavender", "lemon balm", "lemon grass", "lemon verbena", "marjoram", "nutmeg", "oregano", "paprika", "parsley", "peppermint", "poppy seeds", "rosemary", "saffron", "sage", "savory",  "sesame, sorrel", "star anise", "spearmint", "tarragon", "thyme", "turmeric", "vanilla", "wasabi", "yellow mustard seeds"]
  end

  def self.count(plant_array)
    count = 0
    plant_array.each do |plant|
      if return_herbs.include?(plant["name"].downcase)
        count += 1
      end
    end
    return count
  end

end

