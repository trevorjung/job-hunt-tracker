class Api::V1::ContactsController < ApplicationController
  
  def index
    @contacts = Contact.all.as_json.push(Contact.new.as_json)
    render json: @contacts
  end

  def show
    @contact = Contact.find(params[:id])
    render json: @contact
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      render json: @contact
    else

    end
  end

  def update
    @contact = Contact.find(params[:id])
    @contact.attributes = contact_params
    if @contact.save
      render json: @contact
    else

    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.active = false
    if @contact.save
      render json: "Contact Deleted"
    else

    end
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :company,
      :email, :linkedin_invite_sent_date, :linkedin_connection,
      :email_sent_date, :meeting, :meeting_date, :interview,
      :interview_date, :notes, :next_step, :user_id, :active)
  end
end
