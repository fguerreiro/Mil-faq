# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Perfil.create(descricao: 'Leitor', perfil_id: 1, created_at: Time.now)
Perfil.create(descricao: 'Relator', perfil_id: 2, created_at: Time.now)
Perfil.create(descricao: 'Administrador', perfil_id: 3, created_at: Time.now)

Status.create(descricao: 'Em Aberto')
Status.create(descricao: 'Resolvido')