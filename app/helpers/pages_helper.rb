module PagesHelper
  def number_of_accounts
    BankAccount.count
  end

  def number_of_users
    User.count
  end
end