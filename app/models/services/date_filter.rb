class DateFilter

  def self.week_start
    current_date = Date.today
    return week_start = current_date.at_beginning_of_week(:sunday).beginning_of_day
  end

  def self.week_end
    current_date = Date.today
    return week_end = current_date.at_end_of_week(:sunday).end_of_day
  end

  def self.get_current_plants(plant_entries)
    current_plants = []
    plant_entries.each do |entry|
      if entry["created_at"] >= week_start && entry["created_at"] <= week_end
        current_plants << entry.plant
      end
    end
    return current_plants
  end

  def self.not_duplicate?(last_plant_entry)
    last_plant_entry.nil? || last_plant_entry["created_at"] < week_start
  end

end