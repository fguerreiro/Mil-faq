json.array!(@statuses) do |status|
  json.extract! status, :id, :descricao
  json.url status_url(status, format: :json)
end