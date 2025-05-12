For craeting model:-


npx sequelize-cli model:generate --name User --attributes name:string,email:string


for creating migration file:


npx sequelize-cli migration:generate --name <migration_name>


for running migration:

npx sequelize-cli db:migrate


for rollback migration latest:

npx sequelize-cli db:migrate:undo

for rollback all migration:

npx sequelize-cli db:migrate:undo:all



for scripts running:
step-1:
npm run add-structure
step-2:
npm run add-department
step:3
npm run add-instructor