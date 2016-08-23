class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :company
      t.string :email
      t.date :linkedin_invite_sent_date
      t.boolean :linkedin_connection
      t.date :email_sent_date
      t.boolean :meeting
      t.date :meeting_date
      t.boolean :interview
      t.date :interview_date
      t.text :notes
      t.text :next_step
      t.integer :user_id
      t.boolean :active, default: true

      t.timestamps null: false
    end
  end
end
