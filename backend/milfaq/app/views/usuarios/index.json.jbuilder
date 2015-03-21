json.array!(@usuarios) do |usuario|
  json.extract! usuario, :id, :nome, :sobrenome, :email, :perfil, :nome_completo
  json.url usuario_url(usuario, format: :json)
end
