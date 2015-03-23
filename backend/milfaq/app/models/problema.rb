class Problema < ActiveRecord::Base
	has_one :usuario
	#has_one :status
	#validates :relator, presence: true
	#validates :status, presence: true
	#validates :descricao, length: { maximum: 500 }

	def nome_relator
		u = Usuario.find(self.id)
		u.nome_completo
	end

	def nome_status
		s = Status.find(self.id)
		s.descricao
	end
end
