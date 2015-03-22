class Problema < ActiveRecord::Base
	belongs_to :usuario
	has_one :status
	#validates :relator, presence: true
	#validates :status, presence: true
	#validates :descricao, length: { maximum: 500 }
end
