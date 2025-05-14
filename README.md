# Recapitulando

## Etapa e Comando/Arquivo

| Etapa            | Comando/Arquivo                                                                 |
|-------------------|---------------------------------------------------------------------------------|
| **Criar migration** | `npx typeorm-ts-node-commonjs migration:generate -d ormconfig.ts src/migrations/Nome` |
| **Rodar migration** | `npx typeorm-ts-node-commonjs migration:run -d ormconfig.ts`                  |
| **Criar seed**     | `src/seeds.ts`                                                                |
| **Rodar seed**     | `npm run seed`                                                                |