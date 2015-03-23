class Usuario < ActiveRecord::Base
	belongs_to :perfil
	belongs_to :problema
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
end
