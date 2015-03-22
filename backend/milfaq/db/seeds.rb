# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Perfil.create(descricao: 'Leitor', created_at: Time.now.strftime("%d/%m/%Y %H:%M"))
Perfil.create(descricao: 'Relator', created_at: Time.now.strftime("%d/%m/%Y %H:%M"))
Perfil.create(descricao: 'Administrador', created_at: Time.now.strftime("%d/%m/%Y %H:%M"))

#Status.create(descricao: 'Em Aberto', status_id: 1)
#Status.create(descricao: 'Resolvido', status_id: 2)