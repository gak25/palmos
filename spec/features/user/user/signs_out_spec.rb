require "rails_helper"

feature "user signs out" do
  xscenario "authenticated confirmed user signs out" do
    sign_in(FactoryBot.create(:user))
    click_link "Sign Out"

    expect(page).to have_content("Signed out")
  end

  xscenario "unauthenticated user attempts to sign out" do
    visit root_path

    expect(page).to_not have_link("Sign Out")
  end
end
