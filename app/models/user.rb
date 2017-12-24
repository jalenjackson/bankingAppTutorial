class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates_presence_of :first_name
  validates_presence_of :last_name

  before_save :format_name

  has_many :bank_accounts

  def format_name
    self.first_name     = self.first_name.upcase
    self.middle_initial = self.middle_initial.upcase
    self.last_name      = self.last_name.upcase
  end

  def full_name
    "#{last_name}, #{first_name} #{middle_initial}"
  end
end
