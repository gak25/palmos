class ApplicationMailer < ActionMailer::Base
  #{ENV['EMAIL_DOMAIN']}
  default from: "noreply@palmos.co"
  layout "mailer"
end
