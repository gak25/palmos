class UserMailer < ApplicationMailer
  default from: 'greg@palmos.co'

  def account_confirmation(user_id, token)
    @user = User.find(user_id)
    @token = token
    mail to: @user.email, subject: "Account Confirmation"
  end

  def password_reset(user_id, token)
    @user = User.find(user_id)
    @token = token
    mail to: @user.email, subject: "Password Reset"
  end

  def contact(name, from_email)
    @name = name
    mail to: from_email, subject: "Hello from Palmos!"
  end

  def palmos_summary(name, from_email, location, phone, comments)
    @name = name
    @from_email = from_email
    @location = location
    @phone = phone
    @comments = comments
    mail to: "greg@palmos.co", subject: "Palmos inquiry"
  end
end
