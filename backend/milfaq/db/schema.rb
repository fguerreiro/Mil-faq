# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150322231150) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "perfis", force: :cascade do |t|
    t.string   "descricao"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "problemas", force: :cascade do |t|
    t.string   "descricao"
    t.string   "resposta"
    t.integer  "status"
    t.integer  "relator"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "usuario_id"
    t.integer  "status_id"
  end

  add_index "problemas", ["status_id"], name: "index_problemas_on_status_id", using: :btree
  add_index "problemas", ["usuario_id"], name: "index_problemas_on_usuario_id", using: :btree

  create_table "statuses", force: :cascade do |t|
    t.string   "descricao"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "usuarios", force: :cascade do |t|
    t.string   "nome"
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "sobrenome"
  end

  add_foreign_key "problemas", "statuses"
  add_foreign_key "problemas", "usuarios"
end
