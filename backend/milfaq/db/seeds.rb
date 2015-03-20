# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Perfil.create(descricao: 'Leitor', created_at: Time.now)
Perfil.create(descricao: 'Relator', created_at: Time.now)
Perfil.create(descricao: 'Administrador', created_at: Time.now)

Status.create(descricao: 'Em Aberto')
Status.create(descricao: 'Resolvido')