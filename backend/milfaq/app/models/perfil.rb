class Perfil < ActiveRecord::Base
	belongs_to :user
	#validates :descricao, presence: true,
    #                  	  uniqueness: true

    def nome_perfil
    	self.descricao
    end
end
