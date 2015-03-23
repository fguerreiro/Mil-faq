class Usuario < ActiveRecord::Base
	has_one :perfil
	belongs_to :problema, :foreign_key => 'relator'
	#has_one :problema, :foreign_key => 'relator'
	#validates :nome, presence: true
	#validates :sobrenome, presence: true
	#VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	#validates :email, presence: true, length: { maximum: 255 },
    #                  format: { with: VALID_EMAIL_REGEX },
    #                  uniqueness: true
	#validates :perfil, presence: true

	def nome_completo
		self.nome + " " + self.sobrenome
	end

	def nome_perfil
		p = Perfil.find(self.id)
		p.descricao
	end 
end
