json.array!(@usuarios) do |usuario|
  json.extract! usuario, :id, :nome, :sobrenome, :email
  json.perfil usuario.perfil.descricao
  json.url usuario_url(usuario, format: :json)
end
