class Problema < ActiveRecord::Base
	belongs_to :usuario
	validates :relator, presence: true
	validates :descricao, length: { maximum: 500 }
end
