class AddPerfilReferenceToUsuario < ActiveRecord::Migration
  def change
    add_reference :usuarios, :perfil, index: true
    add_foreign_key :usuarios, :perfis
  end
end
