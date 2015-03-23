json.array!(@usuarios) do |usuario|
  json.extract! usuario, :id, :nome, :sobrenome, :email, :nome_completo, :perfil_id, :nome_perfil
  json.url usuario_url(usuario, format: :json)
end
