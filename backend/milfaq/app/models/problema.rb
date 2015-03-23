class Problema < ActiveRecord::Base
	has_one :usuario, :foreign_key => 'relator'
	#has_one :status
	#validates :relator, presence: true
	#validates :status, presence: true
	#validates :descricao, length: { maximum: 500 }


	def nome_relator
		puts "Hello"
		#rel = Usuario.find_by_nome("Francisco")
		#puts rel
	end
end
