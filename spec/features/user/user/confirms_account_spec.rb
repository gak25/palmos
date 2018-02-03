require "rails_helper"

feature "user confirms email account" do
  xscenario "register and confirm" do
    ActionMailer::Base.deliveries = []

    register_user # react forms need to be prepped for this
    expect(page).to have_content("Registration successful.")
    expect(ActionMailer::Base.deliveries.size).to eq(1)

    user = User.find_by(handle: "foob")
    confirm_email(user)

    expect(page).to have_content("Your email address is confirmed. Thank you.")
  end

  xscenario "invalid confirmation_token" do
    user = create :user
    visit edit_account_confirmation_url(User.new_token, email: user.email)

    expect(page).to have_content("There was a problem confirming your email.")
  end
end
