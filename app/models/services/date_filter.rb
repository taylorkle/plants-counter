class DateFilter

  def self.get_current_plants(plant_entries)
    current_plants = []
    plant_entries.each do |entry|
      if utc_to_local_time(entry["created_at"]) >= week_start && utc_to_local_time(entry["created_at"]) <= week_end
        current_plants << entry.plant
      end
    end
    return current_plants
  end

  def self.not_duplicate?(last_plant_entry)
    last_plant_entry.nil? || utc_to_local_time(last_plant_entry["created_at"]) < week_start
  end

  private

  def self.week_start
    current_date_time = DateTime.now
    return week_start = current_date_time.at_beginning_of_week(:sunday).beginning_of_day
  end

  def self.week_end
    current_date_time = DateTime.now
    return week_end = current_date_time.at_end_of_week(:sunday).end_of_day
  end

  def self.utc_to_local_time(created_at)
    offset_hours = (Time.now.utc_offset / 60 / 60).hours
    (created_at.to_time + offset_hours).to_datetime
  end

end